import React from 'react';
import './Advantages.css';

const Advantages = ({ theme }) => {
  const advantages = [
    { number: '✓', text: 'Лицензия МВД' },
    { number: '✓', text: 'Круглосуточная диспетчерская' },
    { number: '✓', text: 'Опыт более 10 лет' },
    { number: '✓', text: 'Обученный персонал' },
    { number: '✓', text: 'GPS-контроль постов' },
    { number: '✓', text: 'Гарантия реагирования 3–7 минут' }
  ];

  return (
    <section id="advantages" className="section advantages" style={{ backgroundColor: theme.background }}>
      <div className="container">
        <h2 className="section-title" style={{ color: theme.primary }}>Почему выбирают нас</h2>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card" style={{ backgroundColor: theme.cardBackground }}>
              <div className="advantage-icon" style={{ backgroundColor: theme.accent }}>
                {advantage.number}
              </div>
              <p style={{ color: theme.text }}>{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;