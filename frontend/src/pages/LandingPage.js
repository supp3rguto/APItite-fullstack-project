import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Importa o Footer
import '../components/styles.css';

const LandingPage = () => {
    return (
        <div className="page-wrapper">
            <div className="landing-v3-wrapper">
                <header className="wave-header">
                    <div className="wave-animation-container">
                        <div className="wave"></div>
                        <div className="wave"></div>
                        <div className="wave"></div>
                    </div>
                </header>

                <div className="logo-section">
                    <img src="/images/logo.png" alt="MyFood Logo" />
                </div>

                <main className="landing-main-content-v3">
                    <div className="landing-content">
                        <div className="landing-text">
                            <h1>Peça seu delivery no MyFood agora mesmo</h1>
                            <p>A maior e mais completa plataforma de delivery do Brasil.</p>
                            <div className="landing-actions">
                                <Link to="/login" className="landing-button primary">Entrar</Link>
                                <Link to="/register" className="landing-button secondary">Criar conta</Link>
                            </div>
                        </div>
                        <div className="landing-image">
                            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Prato de comida saudável" />
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
