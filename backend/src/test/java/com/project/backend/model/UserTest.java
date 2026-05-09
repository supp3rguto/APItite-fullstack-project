package com.project.backend.model;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    @DisplayName("Deve criar um usuário com os dados corretos")
    void shouldCreateUserCorrectly() {
        User user = new User();
        user.setId(1L);
        user.setUsername("guto");
        user.setEmail("guto@email.com");
        user.setPassword("senha123");

        assertEquals(1L, user.getId());
        assertEquals("guto", user.getUsername());
        assertEquals("guto@email.com", user.getEmail());
    }

    @ParameterizedTest
    @CsvSource({
            "guto, guto@email.com, true",
            ", guto@email.com, false",
            "guto, , false"
    })
    @DisplayName("Deve validar se usuário tem dados essenciais preenchidos")
    void shouldValidateIfUserHasEssentialData(String username, String email, boolean isValidExpected) {
        User user = new User();
        user.setUsername(username);
        user.setEmail(email);

        boolean isValid = (user.getUsername() != null && !user.getUsername().isEmpty()) && 
                          (user.getEmail() != null && !user.getEmail().isEmpty());

        assertEquals(isValidExpected, isValid);
    }
}