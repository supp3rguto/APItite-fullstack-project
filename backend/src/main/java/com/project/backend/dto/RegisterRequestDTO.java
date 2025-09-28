package com.project.backend.dto;

public class RegisterRequestDTO {
    private String name;
    private String email;
    private String password;
    private String address;

    public String getName() { return name; }
    public String getEmail() { return email; }
    public String getPassword() { return password; }
    public String getAddress() { return address; }
}