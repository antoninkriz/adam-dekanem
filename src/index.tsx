import React from 'react';
import { render } from 'react-snapshot';
import { ThemeProvider } from 'styled-components';
import './index.scss';
import App from './App';
import theme from './theme';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
