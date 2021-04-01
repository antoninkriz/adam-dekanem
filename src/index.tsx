import React from 'react';
import { render } from 'react-snapshot';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import theme from './theme';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
