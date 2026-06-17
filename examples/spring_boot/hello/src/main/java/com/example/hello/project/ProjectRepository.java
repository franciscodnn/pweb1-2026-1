package com.example.hello.project;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long>{

    // save(Objeto<Project>)

    // findById(Tipo Long)

    // List<Project> findAll()

    // Como eu obtenho um objeto pelo título (title)?

    // title = 'title'
    public List<Project> findByTitle(String title);

    // title LIKE '%title%'
    public List<Project> findByTitleContaining(String title);

}
