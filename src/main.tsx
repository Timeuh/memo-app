import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import {ThemeProvider} from '@/hooks/useTheme';
import {LangProvider} from '@/hooks/useLang';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
);
