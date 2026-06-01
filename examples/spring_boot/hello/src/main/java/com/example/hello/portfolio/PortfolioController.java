package com.example.hello.portfolio;

import com.example.hello.HelloApplication;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/portfolio")
public class PortfolioController {

    @GetMapping("/read")
    public ResponseEntity<String> read() {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body("Hello World");
    }
    
    @GetMapping("/readPortfolio")
    public ResponseEntity<Portfolio> getPortfolio() {
        return ResponseEntity.ok(
            new Portfolio(1L, 
            "Task Manager App", 
            "Task Manager", 
            "github.com",
            new String[]{"angular", "tailwind css"}
        )
        );
    }

}
