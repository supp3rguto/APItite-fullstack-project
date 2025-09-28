package com.project.backend.service;

import com.project.backend.model.Restaurant;
import com.project.backend.repository.JdbcRestaurantRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class RestaurantService {
    private final JdbcRestaurantRepository restaurantRepository;

    public RestaurantService(JdbcRestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public List<Restaurant> findAll(String category) {
        System.out.println("\n--- RESTAURANT SERVICE ---");
        System.out.println("=> Método findAll chamado com a categoria: '" + category + "'");

        if (category != null && !category.trim().isEmpty()) {
            System.out.println("=> Buscando no repositório com findByCategory...");
            List<Restaurant> result = restaurantRepository.findByCategory(category);
            System.out.println("=> Resultado da busca: " + result.size() + " restaurantes encontrados.");
            return result;
        }

        System.out.println("=> Categoria nula ou vazia. Buscando todos os restaurantes com findAll...");
        List<Restaurant> result = restaurantRepository.findAll();
        System.out.println("=> Resultado da busca: " + result.size() + " restaurantes encontrados.");
        return result;
    }
}