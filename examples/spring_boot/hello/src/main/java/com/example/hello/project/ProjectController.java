package com.example.hello.project;

import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
public class ProjectController {
    private final ProjectService service;

    public ProjectController(ProjectService service) {
        this.service = service;
    }

    // /portfolio/search?title=teste
    @GetMapping("/search")
    @ResponseStatus(HttpStatus.OK)
    public List<Project> findByParam(
        @RequestParam(name = "title", required = false) String title) {
            return this.service.findByContaining(title);
        
    }
    

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
    public ResponseEntity<Project> getPortfolio() {
        return ResponseEntity.ok(
            new Project(1L, 
            "Task Manager App", 
            "Task Manager", 
            "github.com",
            new String[]{"angular", "tailwind css"}
        )
        );
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<Project> all() {
        return this.service.all();
    }

    @GetMapping("/get/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Project one(@PathVariable Long id) {
        return this.service.get(id);
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.OK)
    public Project create(@RequestBody Project entity) {
        return this.service.create(entity);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        // System.out.println("Removendo o recurso com id: " + id);
        // boolean removed = this.service.remove(id);

        // if(removed) System.out.println("Objeto removido");
        // else System.out.println("Objeto NÃO removido");
    }
    
    @PutMapping("/update/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Project update(
        @PathVariable Long id, 
        @RequestBody Project entity) {
        System.out.println("Recurso: " + id + ", title: " + entity.getTitle());

        entity.setId(id);
        
        return entity;
    }

    @PatchMapping("/patch/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Project patch(
        @PathVariable Long id,
        @RequestBody Project entity) {

        System.out.println(entity);

        return entity;

    }

}
