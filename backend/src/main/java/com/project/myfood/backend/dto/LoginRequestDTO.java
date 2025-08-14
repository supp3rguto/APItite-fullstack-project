package com.project.myfood.backend.dto;

public class LoginRequestDTO {

    private String email;
    private String password;

    // Construtor
    public LoginRequestDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getters
    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}