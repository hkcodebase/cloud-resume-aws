package com.lab01.cloudresume.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@CrossOrigin(origins = "https://hkcloudresume.com/")
@RestController
@RequestMapping("/counter")
public class CounterController {

    @Autowired
    DynamoDBService counterService;

    @GetMapping
    public int increment() {
        return counterService.getCounter();
    }

}
