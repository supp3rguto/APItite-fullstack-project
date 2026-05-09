import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renderizar o logotipo da APItite', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logoElement = screen.getByText(/APItite/i); 
    expect(logoElement).toBeInTheDocument();
  });
});