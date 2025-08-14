package com.project.myfood.backend.dto;

public class LoginResponseDTO {

    private String token;
    private String userName;
    private String userAddress;

    // Construtor
    public LoginResponseDTO(String token, String userName, String userAddress) {
        this.token = token;
        this.userName = userName;
        this.userAddress = userAddress;
    }

    // Getters
    public String getToken() {
        return token;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserAddress() {
        return userAddress;
    }
}