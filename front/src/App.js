import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Footer from './components/footers/Footer';
import ThemeContextProvider from './ThemeContext';
import BtnToggle from './BtnToggle';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <ThemeContextProvider>
          <BtnToggle/>
          <Header />
          <MainPages />
          <Footer />
          </ThemeContextProvider>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
