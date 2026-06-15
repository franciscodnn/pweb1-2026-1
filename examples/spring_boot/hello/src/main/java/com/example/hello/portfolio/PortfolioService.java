package com.example.hello.portfolio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PortfolioService {
    private final ArrayList<Portfolio> database;

    private final ProjectRepository repository;

    public PortfolioService(ProjectRepository repository) {
        this.repository = repository;

        this.database = new ArrayList<Portfolio>();

        this.seed();
    }

    public Portfolio create(Portfolio portfolio) {
        // portfolio.setId(Long.valueOf(this.database.size() + 2));
        //this.database.add(portfolio);

        portfolio = this.repository.save(portfolio);

        return portfolio;
    }

    public boolean remove(Long id) {
        return this.database.removeIf(element -> element.getId() == id);
    }

    public List<Portfolio> all() {
        return this.repository.findAll();
    }

    public Portfolio get(Long id) {
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
        for(Portfolio portfolio : database) {
            if(portfolio.getId() == id) return portfolio;
        }

        return null;
    }

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
}
