import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Este componente recebe as páginas filhas (children) e as envolve com o Header e Footer
const AuthLayout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <div className="app-container">
        <Header />
      </div>
      
      <main className="site-content">
        <div className="app-container">
          {children} {/* Aqui é onde a página (ex: Dashboard) será renderizada */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthLayout;
