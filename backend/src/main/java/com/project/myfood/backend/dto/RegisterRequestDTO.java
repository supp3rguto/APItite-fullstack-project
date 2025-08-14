package com.project.myfood.backend.dto;

// Esta é uma classe simples apenas para carregar os dados do registro
public class RegisterRequestDTO {
    private String name;
    private String email;
    private String password;
    private String address;

    // Getters
    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getPassword() { return password; }
    public String getAddress() { return address; }
}