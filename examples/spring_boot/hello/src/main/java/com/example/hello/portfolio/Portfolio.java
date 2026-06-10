package com.example.hello.portfolio;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// @Data
// @AllArgsConstructor
// @NoArgsConstructor
public class Portfolio {
    private Long id;
    private String title;
    private String description;
    private String repo;
    private String[] techs;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getRepo() {
        return repo;
    }
    public void setRepo(String repo) {
        this.repo = repo;
    }
    public String[] getTechs() {
        return techs;
    }
    public void setTechs(String[] techs) {
        this.techs = techs;
    }

    public Portfolio () { }

    public Portfolio(Long id, String title, String description, String repo, String[] techs) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.repo = repo;
        this.techs = techs;
    }
}
