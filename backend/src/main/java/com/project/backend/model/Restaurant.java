package com.project.backend.model;

import java.math.BigDecimal;

public class Restaurant {

    private Long id;
    private String name;
    private String companyDomain;
    private BigDecimal rating;
    private String category;
    private String distance;
    private String deliveryTime;
    private BigDecimal deliveryFee;

    public Restaurant() {
    }

    public Restaurant(Long id, String name, String companyDomain, BigDecimal rating, String category, String distance, String deliveryTime, BigDecimal deliveryFee) {
        this.id = id;
        this.name = name;
        this.companyDomain = companyDomain;
        this.rating = rating;
        this.category = category;
        this.distance = distance;
        this.deliveryTime = deliveryTime;
        this.deliveryFee = deliveryFee;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompanyDomain() {
        return companyDomain;
    }

    public void setCompanyDomain(String companyDomain) {
        this.companyDomain = companyDomain;
    }

    public BigDecimal getRating() {
        return rating;
    }

    public void setRating(BigDecimal rating) {
        this.rating = rating;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }

    public String getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(String deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public BigDecimal getDeliveryFee() {
        return deliveryFee;
    }

    public void setDeliveryFee(BigDecimal deliveryFee) {
        this.deliveryFee = deliveryFee;
    }
}