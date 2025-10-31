import React, { useState } from 'react';
import './Header.css';

const Header = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+78001234567';
  };

  return (
    <header className="header" style={{ backgroundColor: theme.headerBackground }}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2 style={{ color: 'white', cursor: 'pointer' }} onClick={() => handleNavClick('home')}>
              СпецОхрана
            </h2>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Главная</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Услуги</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>О компании</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Контакты</a>
          </nav>

          <div className="header-actions">
            <a 
              href="tel:+78001234567" 
              className="phone-link" 
              style={{ color: 'white' }}
              onClick={handlePhoneClick}
            >
              +7 (800) 123-45-67
            </a>
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: 'white' }}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;