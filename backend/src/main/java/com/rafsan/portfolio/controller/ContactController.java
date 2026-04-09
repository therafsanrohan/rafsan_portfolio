package com.rafsan.portfolio.controller;

import com.rafsan.portfolio.model.ContactMessage;
import com.rafsan.portfolio.repository.ContactRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000") // Allow Next.js frontend
public class ContactController {

    private final ContactRepository contactRepository;

    @Autowired
    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @PostMapping
    public ResponseEntity<Map<String, String>> submitContactForm(@Valid @RequestBody ContactMessage message) {
        contactRepository.save(message);
        
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Thank you, your message has been received.");
        
        return ResponseEntity.ok(response);
    }
}
