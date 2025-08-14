import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Adicionamos o 'Link' à importação
import axios from 'axios';
import '../components/styles.css';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        setSuccessMessage('');

        const newUser = { name, email, password, address };

        try {
            await axios.post('http://localhost:8080/api/auth/register', newUser);
            setSuccessMessage('Cadastro realizado com sucesso! Redirecionando para o login...');

            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (err) {
            setError('Falha no cadastro. O e-mail informado já pode estar em uso.');
            setIsSubmitting(false);
        }
    };

    return (
        <div className="auth-page-wrapper">
            <div className="login-container">
                <form onSubmit={handleRegister} className="login-form">
                    <h2>Crie sua Conta</h2>
                    <input
                        type="text"
                        placeholder="Nome Completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Seu endereço (Ex: Rua, Número, Bairro)"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />

                    {error && <p className="error-message">{error}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
                    </button>

                    {/* 2. LINHA ADICIONADA: Link para voltar à página de login */}
                    <p className="register-link">
                        Já tem uma conta? <Link to="/login">Entre</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
