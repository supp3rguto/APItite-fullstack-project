import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../components/styles.css';

const LandingPage = () => {
    return (
        <div className="page-wrapper">
            <header className="wave-header">
                <h1 className="logo-text">
                    APItite
                </h1>
                <div className="wave-animation-container">
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                    <div className="wave"></div>
                </div>
            </header>

            <main className="main-content">
                <section className="content-section">
                    <div className="content-grid">
                        <div className="text-content">
                            <h2>Sua fome faz o request, a gente manda o response.</h2>
                            <p>Não somos apenas mais um sistema de delivery; somos a prova de que a dedicação de um desenvolvedor pode transformar a complexa tarefa de escolher o que comer em uma experiência simples, lógica e deliciosa.</p>
                            <div className="actions">
                                <Link to="/login" className="btn primary">Entrar</Link>
                                <Link to="/register" className="btn secondary">Criar conta</Link>
                            </div>
                        </div>
                        <div className="image-content">
                            <img src="../images/pic.jpg" alt="Imagem com vários pratos de comida" />
                        </div>
                    </div>
                </section>

                <section className="content-section">
                    <div className="content-grid reverse-on-desktop">
                        <div className="gear-container">
                            <img 
                                src="/images/icon.png" 
                                alt="Engrenagem representando a lógica do sistema" 
                                className="gear-icon" 
                            />
                        </div>
                        <div className="text-content">
                            <p>Com a precisão de um algoritmo e a paixão de um chef, o APItite garante que sua escolha seja mais do que um palpite: é a certeza de que o prato certo chegará no tempo certo.</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer /> 
        </div>
    );
};

export default LandingPage;
