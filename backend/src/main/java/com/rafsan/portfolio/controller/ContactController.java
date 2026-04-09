package com.rafsan.portfolio.controller;

import com.rafsan.portfolio.model.ContactMessage;
import com.rafsan.portfolio.repository.ContactRepository;
import com.rafsan.portfolio.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact") // Ensure matching standard mapped requests
@CrossOrigin(origins = "http://localhost:3000") // Secure Access Controls Only 
public class ContactController {

    private final ContactRepository contactRepository;
    private final EmailService emailService;

    @Autowired
    public ContactController(ContactRepository contactRepository, EmailService emailService) {
        this.contactRepository = contactRepository;
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> submitContactForm(@Valid @RequestBody ContactMessage message) {
        // Optional persistence logging
        try {
            contactRepository.save(message);
        } catch (Exception e) {
            // DB degradation allowed, email is actual core system.
        }
        
        Map<String, String> response = new HashMap<>();
        
        // Execute Secure Notification Pipeline
        try {
            emailService.sendContactEmail(message.getName(), message.getEmail(), message.getMessage());
            response.put("status", "success");
            response.put("message", "Message sent successfully.");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Internal transmission failure. Signal lost.");
            return ResponseEntity.internalServerError().body(response);
        }
    }
}
