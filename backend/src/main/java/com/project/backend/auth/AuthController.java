package com.project.backend.auth;

import com.project.backend.dto.LoginRequestDTO;
import com.project.backend.dto.LoginResponseDTO;
import com.project.backend.dto.RegisterRequestDTO;
import com.project.backend.model.User;
import com.project.backend.repository.JdbcUserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JdbcUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(JdbcUserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO body) {
        User user = this.userRepository.findByEmail(body.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuário ou senha inválidos."));

        if (passwordEncoder.matches(body.getPassword(), user.getPassword())) {
            String token = "dummy-jwt-token-for-" + user.getUsername();
            return ResponseEntity.ok(new LoginResponseDTO(token, user.getName(), user.getAddress()));
        }
        return ResponseEntity.status(401).body(null); // Unauthorized
    }

    private static final String PASSWORD_PATTERN = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\\S+$).{8,}$";
    private static final Pattern pattern = Pattern.compile(PASSWORD_PATTERN);
    private static final List<String> ALLOWED_EMAIL_DOMAINS = Arrays.asList("@gmail.com", "@outlook.com", "@icloud.com");

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequestDTO requestDTO) {
        if (!isValidEmailDomain(requestDTO.getEmail())) {
            return ResponseEntity.badRequest().body("Domínio de e-mail inválido. Use @gmail.com, @outlook.com ou @icloud.com.");
        }

        if (!isValidPassword(requestDTO.getPassword())) {
            return ResponseEntity.badRequest().body("A senha não atende aos critérios de segurança (mín. 8 caracteres, uma maiúscula, uma minúscula, um número e um caractere especial).");
        }

        if (userRepository.findByEmail(requestDTO.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Este e-mail já está em uso.");
        }

        User newUser = new User();
        newUser.setName(requestDTO.getName());
        newUser.setEmail(requestDTO.getEmail());
        newUser.setAddress(requestDTO.getAddress());
        newUser.setPassword(passwordEncoder.encode(requestDTO.getPassword()));

        userRepository.save(newUser);

        return ResponseEntity.ok().build();
    }

    private boolean isValidPassword(String password) {
        if (password == null) return false;
        return pattern.matcher(password).matches();
    }

    private boolean isValidEmailDomain(String email) {
        if (email == null) return false;
        return ALLOWED_EMAIL_DOMAINS.stream().anyMatch(email::endsWith);
    }
}