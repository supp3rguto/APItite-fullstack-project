package com.project.myfood.backend.repository;

import com.project.myfood.backend.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
// NOME CORRIGIDO: de 'restaurantRepository' para 'RestaurantRepository'
// TIPO CORRIGIDO: de 'User' para 'Restaurant', pois este repositório é para restaurantes
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {

    // Este é o novo método para buscar restaurantes por sua categoria
    List<Restaurant> findByCategory(String category);

    // O método findByEmail foi REMOVIDO daqui, pois ele pertence ao UserRepository
}