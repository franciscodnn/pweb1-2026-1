package com.example.hello.project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    // private final ArrayList<Portfolio> database;
    private final ProjectRepository repository;

    public ProjectService(ProjectRepository repository) {
        this.repository = repository;
    }

    public Project create(Project portfolio) {
        return this.repository.save(portfolio);
    }

    public void remove(Long id) {        
        this.repository.deleteById(id);
    }

    public List<Project> all() {        
        return this.repository.findAll();
    }

    public Project get(Long id) {
        /* Usando lambda */
        /* 
        final Portfolio portfolio[] = {new Portfolio()};
        
        database.forEach(element -> {
            if(element.getId() == id) {
                portfolio[0].setId(element.getId());
                portfolio[0].setTitle(element.getTitle());
                portfolio[0].setDescription(element.getDescription());
                portfolio[0].setRepo(element.getRepo());
                portfolio[0].setTechs(element.getTechs());
            }
        });

        return portfolio[0].getId() == null ? null : portfolio[0];
        */

        /* Programação Imperativa */
        /* 
        for(Portfolio portfolio : database) {
            if(portfolio.getId() == id) return portfolio;
        }
        */
        return null;
    }

    /*
    private void seed() {
        this.database.add(
        new Portfolio(1L, 
            "Task Manager App", 
            "Task Manager", 
            "github.com",
            new String[]{"angular", "tailwind css"}
        ));

        this.database.add(
        new Portfolio(2L, 
            "Portfolio App", 
            "Portfolio App", 
            "github.com",
            new String[]{"next/react", "tailwind css", "spring boot"}
        ));
    }
    */
}
