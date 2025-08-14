import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const Header = () => {
    const [userAddress, setUserAddress] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Esta função roda uma vez quando o componente é montado
        const address = localStorage.getItem('user_address');
        
        // Se encontrar um endereço no localStorage, atualiza o estado
        if (address) {
            setUserAddress(address);
        }
    }, []); // O array vazio [] garante que rode só uma vez

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };
    
    return (
        <header className="header">
            <Link to="/">
                <img src="/images/logo.png" alt="MyFood Logo" className="header-logo" />
            </Link>
            
            {/* Esta é a lógica de renderização condicional */}
            {userAddress ? (
                // Se 'userAddress' tiver um valor (não for null), mostra isso:
                <div className='header-user-info'>
                    <span>{userAddress}</span>
                    <button onClick={handleLogout} className="logout-button">Sair</button>
                </div>
            ) : (
                // Se 'userAddress' for null, mostra isso:
                <Link to="/login" className="login-link">Entrar</Link>
            )}
        </header>
    );
};

export default Header;