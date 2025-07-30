import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { PropertyProvider } from './context/PropertyContext.tsx';

/**
 * The entry point of the React application.
 * It sets up the root component and wraps it with the necessary context providers.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
