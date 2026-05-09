package com.project.backend.service;

import com.project.backend.model.User;
import com.project.backend.repository.JdbcUserRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private JdbcUserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    @DisplayName("Deve capturar e verificar os argumentos enviados para o repositório ao criar utilizador")
    void shouldCaptureArgumentsWhenCreatingUser() {
        User newUser = new User();
        newUser.setUsername("guto_pt");
        newUser.setEmail("guto@portugal.pt");
        newUser.setPassword("securepass");

        userService.registerUser(newUser);

        ArgumentCaptor<User> userCaptor = ArgumentCaptor.forClass(User.class);
        
        verify(userRepository).save(userCaptor.capture());
        
        User capturedUser = userCaptor.getValue();
        
        assertEquals("guto_pt", capturedUser.getUsername());
        assertEquals("guto@portugal.pt", capturedUser.getEmail());
    }
}