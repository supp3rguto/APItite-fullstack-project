package com.project.myfood.backend.controller;

import com.project.myfood.backend.model.Restaurant;
import com.project.myfood.backend.service.RestaurantService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurantes")
@CrossOrigin(origins = "http://localhost:3000")
public class RestaurantController {

    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping
    public List<Restaurant> listarRestaurantes(@RequestParam(required = false) String category) {
        return restaurantService.findAll(category);
    }
}