package com.project.myfood.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.math.BigDecimal;

@Entity
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String companyDomain;
    private BigDecimal rating;
    private String category;
    private String distance;
    private String deliveryTime;
    private BigDecimal deliveryFee;

    public Restaurant() {}


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getCompanyDomain() { return companyDomain; }
    public void setCompanyDomain(String companyDomain) { this.companyDomain = companyDomain; }
    public BigDecimal getRating() { return rating; }
    public void setRating(BigDecimal rating) { this.rating = rating; }
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public String getDistance() { return distance; }
    public void setDistance(String distance) { this.distance = distance; }
    public String getDeliveryTime() { return deliveryTime; }
    public void setDeliveryTime(String deliveryTime) { this.deliveryTime = deliveryTime; }
    public BigDecimal getDeliveryFee() { return deliveryFee; }
    public void setDeliveryFee(BigDecimal deliveryFee) { this.deliveryFee = deliveryFee; }
}
