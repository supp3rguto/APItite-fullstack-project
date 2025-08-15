import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AuthLayout = ({ children }) => {
  return (
    <div className="site-wrapper">
      <div className="app-container">
        <Header />
      </div>
      
      <main className="site-content">
        <div className="app-container">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuthLayout;
