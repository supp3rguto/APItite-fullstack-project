import React, { useState } from 'react';
// AQUI ESTÁ A CORREÇÃO: Adicionamos 'Link' à importação
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../components/styles.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });
            localStorage.setItem('user_token', response.data.token);
            localStorage.setItem('user_name', response.data.userName);
            localStorage.setItem('user_address', response.data.userAddress);
            
            navigate('/restaurantes');
            
        } catch (err) {
            setError('Falha no login. Verifique seu e-mail e senha.');
        }
    };

    return (
        <div className='auth-page-wrapper'>
            <div className="login-container">
                <form onSubmit={handleLogin} className="login-form">
                    <h2>Login</h2>
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
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Entrar</button>

                    <p className="register-link">
                        Não tem uma conta? <Link to="/register">Cadastre-se</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;