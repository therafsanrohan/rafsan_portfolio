package com.rafsan.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactEmail(String name, String email, String messageBody) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo("knock.rafsan@gmail.com");
        mailMessage.setSubject("New Contact Form Submission - " + name);
        mailMessage.setText("Name: " + name + "\n" +
                            "Email: " + email + "\n\n" +
                            "Message:\n" + messageBody);
        
        mailSender.send(mailMessage);
    }
}
