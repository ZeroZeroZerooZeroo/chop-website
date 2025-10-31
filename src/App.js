import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import ThemeSelector from './components/ThemeSelector.js';
import GlobalStyles from './styles/GlobalStyles.js';
import { themes } from './styles/themes.js';
import './App.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('chop-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chop-theme', currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (themeKey) => {
    setCurrentTheme(themeKey);
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <div className="App">
        <GlobalStyles />
        <ThemeSelector 
          currentTheme={currentTheme} 
          onThemeChange={handleThemeChange} 
        />
        <Header theme={themes[currentTheme]} />
        <Hero theme={themes[currentTheme]} />
        <Services theme={themes[currentTheme]} />
        <About theme={themes[currentTheme]} />
        <Contact theme={themes[currentTheme]} />
        <Footer theme={themes[currentTheme]} />
      </div>
    </ThemeProvider>
  );
}

export default App;