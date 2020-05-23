import React from 'react';

import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import GlobalStyles from './styles/global';
import PurpleLight from './styles/themes/PurpleLight';

function App() {
  return (
    <ThemeProvider theme={PurpleLight}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
