package com.project.backend.controller;

import com.project.backend.service.RestaurantService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class RestaurantControllerExceptionTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RestaurantService restaurantService;

    @Test
    @DisplayName("Deve retornar status 500 Internal Server Error quando a base de dados falha")
    void shouldReturn500WhenDatabaseFails() throws Exception {
        when(restaurantService.getAllRestaurants()).thenThrow(new RuntimeException("Database connection timeout"));

        mockMvc.perform(get("/api/restaurants"))
               .andExpect(status().isInternalServerError()); 
    }
}