package com.project.myfood.backend.controller;

import com.project.myfood.backend.model.Restaurant;
import com.project.myfood.backend.service.RestaurantService; // Nome da dependência corrigido
import org.springframework.web.bind.annotation.*; // Adicionado import para @RequestParam

import java.util.List;

@RestController
@RequestMapping("/api/restaurantes")
@CrossOrigin(origins = "http://localhost:3000")
// NOME CORRIGIDO: de 'restaurantController' para 'RestaurantController'
public class RestaurantController {

    // Nomes dos tipos corrigidos para PascalCase
    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    // LÓGICA ATUALIZADA: O método agora aceita um parâmetro da URL
    @GetMapping
    public List<Restaurant> listarRestaurantes(@RequestParam(required = false) String category) {
        // O parâmetro 'category' (que vem de ?category=Mercado, por exemplo) é passado para o serviço
        return restaurantService.findAll(category);
    }
}