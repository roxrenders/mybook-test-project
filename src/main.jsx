import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AppProvider } from './ContextApi/ContextApi.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
