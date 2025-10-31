import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSelector from './components/ThemeSelector';
import GlobalStyles from './styles/GlobalStyles';
import { themes } from './styles/themes';
import './App.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState('default');

  // Загрузка темы из localStorage при монтировании
  useEffect(() => {
    const savedTheme = localStorage.getItem('chop-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Сохранение темы в localStorage при изменении
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