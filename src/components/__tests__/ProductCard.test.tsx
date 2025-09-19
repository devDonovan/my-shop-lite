import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';

// Mock the store
const mockToggleFavorite = jest.fn();
const mockIsFavorite = jest.fn((id: string) => id === '1');

jest.mock('../../store/favoritesStore', () => ({
  useFavoritesStore: () => ({
    isFavorite: mockIsFavorite,
    toggleFavorite: mockToggleFavorite,
  }),
}));

const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  description: 'Test Description',
  price: 99.99,
  image: 'https://example.com/image.jpg',
  category: 'Test',
};

const mockOnPress = jest.fn();

describe('ProductCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders product information correctly', () => {
    const { getByText, getByLabelText } = render(
      <ProductCard product={mockProduct} onPress={mockOnPress} />
    );

    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('$99.99')).toBeTruthy();
    expect(getByLabelText('View Test Product, Price $99.99')).toBeTruthy();
  });

  it('calls onPress when product card is pressed', () => {
    const { getByLabelText } = render(
      <ProductCard product={mockProduct} onPress={mockOnPress} />
    );

    fireEvent.press(getByLabelText('View Test Product, Price $99.99'));
    expect(mockOnPress).toHaveBeenCalledWith(mockProduct);
  });

  it('shows favorite heart when product is favorited', () => {
    const { getByText } = render(
      <ProductCard product={mockProduct} onPress={mockOnPress} />
    );

    expect(getByText('❤️')).toBeTruthy();
  });

  it('shows unfavorite heart when product is not favorited', () => {
    mockIsFavorite.mockReturnValue(false);

    const { getByText } = render(
      <ProductCard product={mockProduct} onPress={mockOnPress} />
    );

    expect(getByText('🤍')).toBeTruthy();
  });

  it('calls toggleFavorite when favorite button is pressed', () => {
    mockIsFavorite.mockReturnValue(false);

    const { getByLabelText } = render(
      <ProductCard product={mockProduct} onPress={mockOnPress} />
    );

    fireEvent.press(getByLabelText('Add to favorites'));
    expect(mockToggleFavorite).toHaveBeenCalledWith('1');
  });
});
