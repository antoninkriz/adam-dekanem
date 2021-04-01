import React from 'react';
import { render } from 'react-snapshot';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import './index.scss';
import App from './App';
import theme from './theme';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

ReactGA.initialize('G-M9EZ1WH82Q');

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
