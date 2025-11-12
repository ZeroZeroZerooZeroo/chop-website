import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Advantages from './components/Advantages.js';
import Calculator from './components/Calculator.js';
import Services from './components/Services.js';
import AboutCompany from './components/AboutCompany.js';
import Cases from './components/Cases.js';
import Reviews from './components/Reviews.js';
import Career from './components/Career.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import GlobalStyles from './styles/GlobalStyles.js';
import { themes } from './styles/themes.js';
import './App.css';

function App() {
  const [currentTheme] = useState('default');

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <div className="App">
        <GlobalStyles />
        <Header theme={themes[currentTheme]} />
        <Hero theme={themes[currentTheme]} />
        <Advantages theme={themes[currentTheme]} />
        <Calculator theme={themes[currentTheme]} />
        <Services theme={themes[currentTheme]} />
        <AboutCompany theme={themes[currentTheme]} />
        <Cases theme={themes[currentTheme]} />
        <Reviews theme={themes[currentTheme]} />
        <Career theme={themes[currentTheme]} />
        <Contact theme={themes[currentTheme]} />
        <Footer theme={themes[currentTheme]} />
      </div>
    </ThemeProvider>
  );
}

export default App;