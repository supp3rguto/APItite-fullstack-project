import { render, screen } from '@testing-library/react';
import CategoryList from './CategoryList';

describe('CategoryList', () => {
  test('Deve renderizar os ícones de categoria corretamente baseados nas props', () => {
    const mockCategories = [
      { id: 1, name: 'Restaurante', imageUrl: '/images/categories/restaurant.png' },
      { id: 2, name: 'Mercado', imageUrl: '/images/categories/market.png' }
    ];

    render(<CategoryList categories={mockCategories} />);

    expect(screen.getByText('Restaurante')).toBeInTheDocument();
    expect(screen.getByText('Mercado')).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });
});