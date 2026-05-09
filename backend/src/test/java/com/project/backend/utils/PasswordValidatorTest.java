package com.project.backend.utils;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

class PasswordValidatorTest {

    private final PasswordValidator validator = new PasswordValidator();

    @Test
    @DisplayName("Deve aprovar uma senha válida e forte")
    void shouldApproveValidPassword() {
        assertTrue(validator.isValid("SenhaForte@123"));
    }

    @ParameterizedTest
    @ValueSource(strings = {
        "fraca",           
        "SemEspecial123", 
        "semmaiuscula@12", 
        "1234567890"      
    })
    @DisplayName("Deve rejeitar senhas que não cumprem os critérios de segurança")
    void shouldRejectWeakPasswords(String weakPassword) {
        assertFalse(validator.isValid(weakPassword));
    }
}