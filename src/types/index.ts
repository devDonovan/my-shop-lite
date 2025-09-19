export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

export interface RootStackParamList {
  Home: undefined;
  ProductDetails: { productId: string };
  Favorites: undefined;
  [key: string]: undefined | { productId: string };
}

export interface TabParamList {
  Products: undefined;
  Favorites: undefined;
  [key: string]: undefined;
}

export interface FavoritesStore {
  favorites: string[];
  addFavorite: (productId: string) => void;
  removeFavorite: (productId: string) => void;
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
  initializeFavorites: () => Promise<void>;
}
