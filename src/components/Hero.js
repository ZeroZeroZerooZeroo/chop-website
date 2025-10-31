import React from 'react';
import './Hero.css';

const Hero = ({ theme }) => {
  const handleOrderService = () => {
    // Прокрутка к форме заявки
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleLearnMore = () => {
    // Прокрутка к услугам
    document.getElementById('services').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="hero" style={{ backgroundColor: theme.primary }}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 style={{ color: 'white' }}>
              Профессиональная охрана <br />вашего бизнеса
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Полный комплекс охранных услуг для предприятий, офисов и частных лиц. 
              Гарантия безопасности 24/7 с применением современных технологий.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary" 
                style={{ backgroundColor: theme.accent }}
                onClick={handleOrderService}
              >
                Заказать услугу
              </button>
              <button 
                className="btn btn-secondary" 
                style={{ color: 'white', borderColor: 'white' }}
                onClick={handleLearnMore}
              >
                Узнать больше
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="security-badge">
              <span>ОХРАНА</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;