package com.lab01.cloudresume.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "https://hkcloudresume.com/", maxAge = 3600)
@RestController
@RequestMapping("/counter")
public class CounterController {


    private final DynamoDBService dynamoDBService;

    public CounterController(DynamoDBService counterService) {
        this.dynamoDBService = counterService;
    }

    @GetMapping
    public int increment() {
        return dynamoDBService.getCounter();
    }

}
