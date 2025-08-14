package com.project.myfood.backend.auth;

import com.project.myfood.backend.dto.LoginRequestDTO;
import com.project.myfood.backend.dto.LoginResponseDTO;
import com.project.myfood.backend.dto.RegisterRequestDTO; // 1. Importar o novo DTO
import com.project.myfood.backend.model.User;
import com.project.myfood.backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO body) {
        User user = this.userRepository.findByEmail(body.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found."));

        if (passwordEncoder.matches(body.getPassword(), user.getPassword())) {
            String token = "dummy-jwt-token-for-" + user.getUsername();
            return ResponseEntity.ok(new LoginResponseDTO(token, user.getName(), user.getAddress()));
        }
        return ResponseEntity.badRequest().build();
    }

    // --- MÉTODO REGISTER CORRIGIDO ---
    @PostMapping("/register")
    // 2. O método agora recebe o DTO, e não a entidade User
    public ResponseEntity<Void> register(@RequestBody RegisterRequestDTO requestDTO) {
        // 3. A verificação usa o e-mail que veio no DTO
        if (userRepository.findByEmail(requestDTO.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().build();
        }

        // 4. Somente APÓS a verificação, criamos uma NOVA entidade User
        User newUser = new User();
        newUser.setName(requestDTO.getName());
        newUser.setEmail(requestDTO.getEmail());
        newUser.setAddress(requestDTO.getAddress());
        // 5. Criptografamos a senha do DTO e a colocamos na nova entidade
        newUser.setPassword(passwordEncoder.encode(requestDTO.getPassword()));

        // 6. Salvamos a nova entidade User, que nunca foi gerenciada antes
        userRepository.save(newUser);

        return ResponseEntity.ok().build();
    }
}