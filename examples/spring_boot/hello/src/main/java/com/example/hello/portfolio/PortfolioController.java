package com.example.hello.portfolio;

import com.example.hello.HelloApplication;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@RequestMapping("/portfolio")
public class PortfolioController {

    @GetMapping(
        path = "/read", 
        consumes = "application/json",
        params = "tipo=portfolio"
    )
    public ResponseEntity<String> read(
        @RequestParam(name="id", required=false) Long id
    ) {
        if(id != null)
            System.out.println("id do request: " + id);

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

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public Portfolio create(@RequestBody Portfolio entity) {
        System.out.println("Post recebido!");        
        
        return entity;
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        System.out.println("Removendo o recurso com id: " + id);
    }
    
    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Portfolio update(
        @PathVariable Long id, 
        @RequestBody Portfolio entity) {
        System.out.println("Recurso: " + id + ", title: " + entity.getTitle());

        entity.setId(id);
        
        return entity;
    }

    @PatchMapping("/patch/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Portfolio patch(
        @PathVariable Long id,
        @RequestBody Portfolio entity) {

        System.out.println(entity);

        return entity;

    }

}
