import { create } from 'zustand';
import { FavoritesStore } from '../types';
import { storage } from '../utils/storage';

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],

  addFavorite: (productId: string) => {
    const { favorites } = get();
    if (!favorites.includes(productId)) {
      const newFavorites = [...favorites, productId];
      set({ favorites: newFavorites });
      storage.setFavorites(newFavorites);
    }
  },

  removeFavorite: (productId: string) => {
    const currentFavorites = get().favorites;
    const newFavorites = currentFavorites.filter(id => id !== productId);
    set({ favorites: newFavorites });
    storage.setFavorites(newFavorites);
  },

  toggleFavorite: (productId: string) => {
    const { isFavorite } = get();
    if (isFavorite(productId)) {
      get().removeFavorite(productId);
    } else {
      get().addFavorite(productId);
    }
  },

  isFavorite: (productId: string) => {
    return get().favorites.includes(productId);
  },

  clearFavorites: () => {
    set({ favorites: [] });
    storage.setFavorites([]);
  },

  // Initialize favorites from storage
  initializeFavorites: async () => {
    try {
      const storedFavorites = await storage.getFavorites();
      set({ favorites: storedFavorites });
    } catch (error) {
      console.error('Error initializing favorites:', error);
    }
  },
}));

// Initialize favorites on app start
storage.getFavorites().then(storedFavorites => {
  useFavoritesStore.setState({ favorites: storedFavorites });
});
