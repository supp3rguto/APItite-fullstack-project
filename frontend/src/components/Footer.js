import React from 'react';
import './styles.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="app-footer">
            <div className="footer-content">
                <p>
                    Este projeto é uma simulação desenvolvida para fins de estudo e portfólio, 
                    com base na interface e funcionalidades de plataformas como o iFood.
                </p>
                <p className="footer-credits">
                    Desenvolvido por Augusto Ortigoso Barbosa | supp3rguto 2025 | 
                    <a href="https://github.com/supp3rguto" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
                    <a href="https://www.linkedin.com/in/augusto-barbosa-769602194" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;