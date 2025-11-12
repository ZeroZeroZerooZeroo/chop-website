import React from 'react';
import './Hero.css';

const Hero = ({ theme }) => {
  const handleOrderService = () => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleCalculateCost = () => {
    document.getElementById('calculator').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="hero" style={{ 
      backgroundColor: theme.primary,
      backgroundImage: 'url(/images/hero-background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 style={{ color: 'white' }}>
              Надёжная охрана 24/7 в Барнауле и Алтайском крае
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              ЧОП «СОВА-22» — лицензированная охрана объектов, домов, бизнеса и мероприятий
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary" 
                style={{ backgroundColor: theme.accent }}
                onClick={handleCalculateCost}
              >
                Рассчитать стоимость
              </button>
              <button 
                className="btn btn-secondary" 
                style={{ color: 'white', borderColor: 'white' }}
                onClick={handleOrderService}
              >
                Заказать звонок
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="security-badge">
              <span>СОВА-22</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;