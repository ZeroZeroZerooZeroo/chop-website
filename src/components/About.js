import React from 'react';
import './About.css';

const About = ({ theme }) => {
  const stats = [
    { number: '10+', label: 'Лет опыта' },
    { number: '24/7', label: 'Диспетчерская' },
    { number: '3-7', label: 'Минут реагирования' },
    { number: '100%', label: 'Лицензия МВД' }
  ];

  return (
    <section id="about" className="section about" style={{ backgroundColor: theme.cardBackground }}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title" style={{ color: theme.primary }}>Почему выбирают нас</h2>
            
            <div className="advantages">
              <div className="advantage">
                <span style={{ color: theme.accent }}>✓</span>
                Лицензия МВД
              </div>
              <div className="advantage">
                <span style={{ color: theme.accent }}>✓</span>
                Круглосуточная диспетчерская
              </div>
              <div className="advantage">
                <span style={{ color: theme.accent }}>✓</span>
                Опыт более 10 лет
              </div>
              <div className="advantage">
                <span style={{ color: theme.accent }}>✓</span>
                Обученный персонал
              </div>
              <div className="advantage">
                <span style={{ color: theme.accent }}>✓</span>
                GPS-контроль постов
              </div>
              <div className="advantage">
                <span style={{ color: theme.accent }}>✓</span>
                Гарантия реагирования 3–7 минут
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-item"
                  style={{ backgroundColor: theme.background }}
                >
                  <div className="stat-number" style={{ color: theme.accent }}>
                    {stat.number}
                  </div>
                  <div className="stat-label" style={{ color: theme.text }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;