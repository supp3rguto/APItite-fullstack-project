package com.project.backend.service;

import com.project.backend.model.Restaurant;
import com.project.backend.repository.JdbcRestaurantRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RestaurantServiceTest {

    @Mock
    private JdbcRestaurantRepository restaurantRepository;

    @InjectMocks
    private RestaurantService restaurantService;

    @Test
    @DisplayName("Deve retornar lista vazia quando não houver restaurantes no banco")
    void shouldReturnEmptyListWhenNoRestaurants() {
        when(restaurantRepository.findAll()).thenReturn(Collections.emptyList());

        List<Restaurant> result = restaurantService.getAllRestaurants();

        assertTrue(result.isEmpty());
        verify(restaurantRepository, times(1)).findAll();
    }

    @Test
    @DisplayName("Deve retornar todos os restaurantes disponíveis")
    void shouldReturnAllRestaurants() {
        Restaurant r1 = new Restaurant();
        r1.setName("Pizza do Guto");
        
        when(restaurantRepository.findAll()).thenReturn(Arrays.asList(r1));

        List<Restaurant> result = restaurantService.getAllRestaurants();

        assertEquals(1, result.size());
        assertEquals("Pizza do Guto", result.get(0).getName());
    }
}