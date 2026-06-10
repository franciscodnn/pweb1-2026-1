package com.example.hello.portfolio;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Portfolio {
    private Long id;
    private String title;
    private String description;
    private String repo;
    private String[] techs;

}
