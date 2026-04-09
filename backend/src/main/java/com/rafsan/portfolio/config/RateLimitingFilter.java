package com.rafsan.portfolio.config;

import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class RateLimitingFilter implements Filter {

    // Isolated memory buffer for IP request rate tracking
    private final Map<String, RequestData> clientRequests = new ConcurrentHashMap<>();
    
    // Hard limits to prevent DoS via /api/contact
    private static final int MAX_REQUESTS = 3; 
    private static final long TIME_WINDOW_MS = 60000; // 1 Minute

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) 
            throws IOException, ServletException {
            
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpServletResponse httpResponse = (HttpServletResponse) response;

        // Apply strict DoS shielding to the POST submission route
        if (httpRequest.getRequestURI().startsWith("/api/contact") && httpRequest.getMethod().equalsIgnoreCase("POST")) {
            
            // Extract IP (accounting for standard cloud proxy headers)
            String clientIp = httpRequest.getHeader("X-Forwarded-For");
            if (clientIp == null || clientIp.isEmpty() || "unknown".equalsIgnoreCase(clientIp)) {
                clientIp = httpRequest.getRemoteAddr();
            }

            long currentTime = System.currentTimeMillis();
            clientRequests.putIfAbsent(clientIp, new RequestData(0, currentTime));
            RequestData data = clientRequests.get(clientIp);

            synchronized(data) {
                // If time window has expired, reset tracker
                if (currentTime - data.startTime > TIME_WINDOW_MS) {
                    data.count = 0;
                    data.startTime = currentTime;
                }

                // If threshold exceeded, execute drop via HTTP 429
                if (data.count >= MAX_REQUESTS) {
                    httpResponse.setStatus(429); // HTTP 429 Too Many Requests
                    httpResponse.setContentType("application/json");
                    httpResponse.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Prevent sudden CORS closures during rejection
                    httpResponse.getWriter().write("{\"status\":\"error\", \"message\":\"DDoS Protection Activated. Transmission Rate Exceeded.\"}");
                    return;
                }
                data.count++;
            }
        }

        chain.doFilter(request, response);
    }

    private static class RequestData {
        int count;
        long startTime;

        RequestData(int count, long startTime) {
            this.count = count;
            this.startTime = startTime;
        }
    }
}
