package com.example.hackapp.controller;

import com.example.hackapp.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @PostMapping(path = "/addUser", consumes = "application/json", produces = "application/json")
    public User addMember(@RequestBody User user) {
        System.out.println(user);
        user.setName(user.getName().toUpperCase());
        user.setAge(user.getAge() * 2);
        return user;
    }

}
