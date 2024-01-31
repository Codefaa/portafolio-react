import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import es from './i18n/es.json';

i18next.use(initReactI18next).init({

  lng: 'es',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: en
    },
    es: {
      translation: es
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
