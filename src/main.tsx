import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error("Root element not found. Make sure there is an element with id 'root' in your HTML.");
}