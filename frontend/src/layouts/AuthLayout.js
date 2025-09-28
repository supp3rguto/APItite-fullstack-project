import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/styles.css';

const AuthLayout = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="site-content app-container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default AuthLayout;
