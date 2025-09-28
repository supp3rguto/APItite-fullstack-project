import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const Header = () => {
    const [userAddress, setUserAddress] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const address = localStorage.getItem('user_address');
        if (address) {
            setUserAddress(address);
        }
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };
    
    return (
        <header className="header-wrapper">
            <div className="header-content app-container">
                <div className="header-logo-container">
                    <Link to="/restaurantes" className="header-logo-link">
                        <h1 className="header-logo-text">
                            APItite
                        </h1>
                    </Link>
                </div>
                
                {userAddress ? (
                    <div className='header-user-info'>
                        <span>{userAddress}</span>
                        <button onClick={handleLogout} className="logout-button">Sair</button>
                    </div>
                ) : (
                    <Link to="/login" className="login-link">Entrar</Link>
                )}
            </div>
        </header>
    );
};

export default Header;
