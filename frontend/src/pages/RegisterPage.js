import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../components/styles.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: ''
    });

    const [errors, setErrors] = useState({});
    
    const [apiError, setApiError] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        const { name, email, password, address } = formData;

        if (!name) newErrors.name = "O nome é obrigatório.";
        if (!email) {
            newErrors.email = "O e-mail é obrigatório.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "O formato do e-mail é inválido.";
        }

        const passwordErrors = [];
        if (password.length < 8) passwordErrors.push("Pelo menos 8 caracteres.");
        if (!/[a-z]/.test(password)) passwordErrors.push("Pelo menos uma letra minúscula.");
        if (!/[A-Z]/.test(password)) passwordErrors.push("Pelo menos uma letra maiúscula.");
        if (!/[0-9]/.test(password)) passwordErrors.push("Pelo menos um número.");
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
            passwordErrors.push("Pelo menos um caractere especial.");
        }
        if (passwordErrors.length > 0) newErrors.password = passwordErrors;
        
        if (!address) newErrors.address = "O endereço é obrigatório.";
        
        return newErrors;
    };


    const handleRegister = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setApiError('');
        setErrors({});

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return; 
        }

        try {
            await axios.post('http://localhost:8080/api/auth/register', formData);
            alert('Cadastro realizado com sucesso! Redirecionando para o login...');
            navigate('/login');

        } catch (err) {
            if (err.response && err.response.data) {
                setApiError(err.response.data);
            } else {
                setApiError('Falha na comunicação com o servidor. Tente novamente mais tarde.');
            }
        } finally {
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
                        name="name" // Atributo 'name' é crucial
                        placeholder="Nome Completo"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error-message">{errors.name}</p>}

                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}

                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <div className="error-message password-requirements">
                            A senha precisa atender aos seguintes critérios:
                            <ul>
                                {errors.password.map(err => <li key={err}>{err}</li>)}
                            </ul>
                        </div>
                    )}

                    <input
                        type="text"
                        name="address"
                        placeholder="Seu endereço (Ex: Rua, Número, Bairro)"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    {errors.address && <p className="error-message">{errors.address}</p>}

                    {apiError && <p className="error-message api-error">{apiError}</p>}
                    
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
                    </button>

                    <p className="register-link">
                        Já tem uma conta? <Link to="/login">Entre</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;