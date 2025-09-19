# MyShopLite - E-Commerce Mobile App

A modern, cross-platform e-commerce mobile app built with React Native (Expo), TypeScript, and React Navigation. Features product browsing, favorites management, deep linking, and responsive design for mobile, tablet, and web platforms.

## 🚀 Features

### Core Features
- **Product List Screen** - Display products in a responsive grid/list layout
- **Product Details Screen** - Show detailed product information with images
- **Favorites Management** - Add/remove products from favorites with persistence
- **Cross-Platform Navigation** - React Navigation with deep linking support
- **Responsive Design** - Optimized for mobile, tablet, and web
- **Accessibility** - Screen reader support and keyboard navigation
- **TypeScript** - Full type safety throughout the application

### Bonus Features
- **Persistent Favorites** - Favorites persist across app restarts using AsyncStorage/expo-secure-store
- **Deep Linking** - Web: `/product/{id}`, Native: `myshoplite://product/{id}`
- **Real-time Updates** - Instant UI updates when favoriting/unfavoriting
- **Performance Optimizations** - Memoization, lazy loading, and efficient rendering
- **Comprehensive Testing** - Unit tests with Jest and React Native Testing Library
- **Code Quality** - ESLint + Prettier configuration

## 🛠 Tech Stack

- **Framework**: React Native (Expo)
- **Language**: TypeScript
- **Navigation**: React Navigation v7
- **State Management**: Zustand
- **Storage**: AsyncStorage (native) / localStorage (web)
- **Testing**: Jest + React Native Testing Library
- **Styling**: React Native StyleSheet
- **Linting**: ESLint + Prettier

## 📱 Screenshots

The app features a clean, modern interface with:
- Product grid/list view with images and pricing
- Detailed product pages with full descriptions
- Favorites management with heart icons
- Responsive design that adapts to different screen sizes
- Smooth navigation and animations

## 🚀 Getting Started

### Prerequisites

- Node.js v22+
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd myshoplite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   # For web
   npm run web
   
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   ```

### Available Scripts

- `npm start` - Start Expo development server
- `npm run web` - Run on web browser
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm test` - Run test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ProductCard.tsx  # Product card component
│   └── __tests__/       # Component tests
├── screens/             # Screen components
│   ├── ProductListScreen.tsx
│   ├── ProductDetailsScreen.tsx
│   └── FavoritesScreen.tsx
├── navigation/          # Navigation configuration
│   └── AppNavigator.tsx
├── store/               # State management
│   ├── favoritesStore.ts
│   └── __tests__/       # Store tests
├── services/            # API and data services
│   └── api.ts
├── types/               # TypeScript type definitions
│   └── index.ts
└── utils/               # Utility functions
    └── storage.ts
```

## 🔧 Technical Decisions

### State Management
- **Zustand** chosen for its simplicity and TypeScript support
- Lightweight alternative to Redux with minimal boilerplate
- Built-in persistence capabilities

### Navigation
- **React Navigation v7** for cross-platform navigation
- Deep linking support for both web and native platforms
- Tab navigation for main sections, stack navigation for details

### Storage
- **AsyncStorage** for native platforms
- **localStorage** for web platform
- Abstraction layer for cross-platform compatibility

### Testing
- **Jest** as the test runner
- **React Native Testing Library** for component testing
- Mocked external dependencies for isolated testing

### Performance
- FlatList with optimized rendering for large product lists
- Memoization of expensive operations
- Lazy loading and efficient image handling

## 🧪 Testing

The app includes comprehensive test coverage:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Test Coverage
- Component testing for ProductCard
- Store testing for favorites management
- Mocked external dependencies
- Accessibility testing considerations

## 🌐 Deep Linking

The app supports deep linking for both web and native platforms:

- **Web**: `https://myshoplite.app/product/123`
- **Native**: `myshoplite://product/123`

Deep links are configured in the navigation setup and work seamlessly across platforms.

## ♿ Accessibility

The app includes comprehensive accessibility features:

- Screen reader support with proper labels
- Keyboard navigation support
- High contrast and readable text
- Touch target sizes meet accessibility guidelines
- Semantic markup for assistive technologies

## 📱 Cross-Platform Compatibility

- **iOS**: Full support with native navigation
- **Android**: Full support with Material Design elements
- **Web**: Responsive design with web-optimized interactions

## 🚀 Deployment

### Web Deployment
The app can be deployed to any static hosting service:

```bash
# Build for web
expo build:web

# Deploy to Vercel, Netlify, or similar
```

### Mobile Deployment
Build for app stores using Expo Application Services (EAS):

```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure and build
eas build --platform all
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Expo team for the excellent development platform
- React Navigation for cross-platform navigation
- Zustand for simple state management
- React Native Testing Library for testing utilities
