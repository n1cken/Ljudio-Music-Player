package com.group4.ljudio.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class BackendTestController {


    @GetMapping("/homepage")
    public String backendToFrontEndTest() {
        return "HEJ FRÅN BACKENDEN POJKARRRR!!!";
    }

}