import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import AppProvider from './hooks';

import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
