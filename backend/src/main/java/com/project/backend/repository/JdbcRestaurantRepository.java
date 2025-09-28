package com.project.backend.repository;

import com.project.backend.model.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class JdbcRestaurantRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public JdbcRestaurantRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Restaurant> restaurantRowMapper = (rs, rowNum) -> new Restaurant(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("company_domain"),
            rs.getBigDecimal("rating"),
            rs.getString("category"),
            rs.getString("distance"),
            rs.getString("delivery_time"),
            rs.getBigDecimal("delivery_fee")
    );

    public List<Restaurant> findAll() {
        String sql = "SELECT * FROM restaurant";
        return jdbcTemplate.query(sql, restaurantRowMapper);
    }

    public List<Restaurant> findByCategory(String category) {
        String sql = "SELECT * FROM restaurant WHERE category = ?";
        return jdbcTemplate.query(sql, new Object[]{category}, restaurantRowMapper);
    }
}