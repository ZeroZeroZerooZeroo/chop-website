import React, { useState } from 'react';
import './Header.css';

const Header = ({ theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ 
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
            <div 
              className="logo-container"
              onClick={() => handleNavClick('home')}
            >
              {/* Логотип из папки public/images */}
              <img 
                src="/images/logo.png" // или logo.svg, logo.jpg в зависимости от вашего файла
                alt="СОВА-22" 
                className="logo-image"
              />
            </div>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Главная</a>
            <a href="#advantages" onClick={(e) => { e.preventDefault(); handleNavClick('advantages'); }}>Преимущества</a>
            <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Услуги</a>
            <a href="#about-company" onClick={(e) => { e.preventDefault(); handleNavClick('about-company'); }}>О компании</a>
            <a href="#cases" onClick={(e) => { e.preventDefault(); handleNavClick('cases'); }}>Кейсы</a>
            <a href="#career" onClick={(e) => { e.preventDefault(); handleNavClick('career'); }}>Карьера</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Контакты</a>
          </nav>

          <div className="header-actions">
            <a 
              href="tel:+78001234567" 
              className="phone-link" 
              style={{ color: 'white' }}
              onClick={handlePhoneClick}
            >
              +7 (3852) 60‒14‒60
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