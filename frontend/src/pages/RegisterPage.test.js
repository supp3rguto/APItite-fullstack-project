import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import RegisterPage from './RegisterPage';

describe('RegisterPage (Eventos de Utilizador)', () => {
  test('Deve permitir que o utilizador preencha os campos de registo', async () => {
    const user = userEvent.setup();
    
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );

    const nameInput = screen.getByPlaceholderText(/nome/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    await user.type(nameInput, 'Augusto Silva');
    await user.type(emailInput, 'augusto@dev.com');
    await user.type(passwordInput, 'senha123');

    expect(nameInput).toHaveValue('Augusto Silva');
    expect(emailInput).toHaveValue('augusto@dev.com');
    expect(passwordInput).toHaveValue('senha123');
  });
});