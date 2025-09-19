import { act, renderHook } from '@testing-library/react-native';
import { useFavoritesStore } from '../favoritesStore';

// Mock storage
jest.mock('../../utils/storage', () => ({
  storage: {
    getFavorites: jest.fn(() => Promise.resolve([])),
    setFavorites: jest.fn(() => Promise.resolve()),
  },
}));

describe('FavoritesStore', () => {
  beforeEach(() => {
    // Reset store state
    useFavoritesStore.setState({ favorites: [] });
    jest.clearAllMocks();
  });

  it('initializes with empty favorites', () => {
    const { result } = renderHook(() => useFavoritesStore());
    
    expect(result.current.favorites).toEqual([]);
  });

  it('adds product to favorites', () => {
    const { result } = renderHook(() => useFavoritesStore());
    
    act(() => {
      result.current.addFavorite('1');
    });

    expect(result.current.favorites).toEqual(['1']);
  });

  it('does not add duplicate favorites', () => {
    const { result } = renderHook(() => useFavoritesStore());
    
    act(() => {
      result.current.addFavorite('1');
      result.current.addFavorite('1');
    });

    expect(result.current.favorites).toEqual(['1']);
  });

  it('removes product from favorites', () => {
    const { result } = renderHook(() => useFavoritesStore());
    
    act(() => {
      result.current.addFavorite('1');
      result.current.addFavorite('2');
      result.current.removeFavorite('1');
    });

    expect(result.current.favorites).toEqual(['2']);
  });

  it('toggles favorite status', () => {
    const { result } = renderHook(() => useFavoritesStore());
    
    act(() => {
      result.current.toggleFavorite('1');
    });

    expect(result.current.favorites).toEqual(['1']);
    expect(result.current.isFavorite('1')).toBe(true);

    act(() => {
      result.current.toggleFavorite('1');
    });

    expect(result.current.favorites).toEqual([]);
    expect(result.current.isFavorite('1')).toBe(false);
  });

  it('clears all favorites', () => {
    const { result } = renderHook(() => useFavoritesStore());
    
    act(() => {
      result.current.addFavorite('1');
      result.current.addFavorite('2');
      result.current.clearFavorites();
    });

    expect(result.current.favorites).toEqual([]);
  });

  it('correctly identifies favorite status', () => {
    const { result } = renderHook(() => useFavoritesStore());
    
    act(() => {
      result.current.addFavorite('1');
    });

    expect(result.current.isFavorite('1')).toBe(true);
    expect(result.current.isFavorite('2')).toBe(false);
  });
});
