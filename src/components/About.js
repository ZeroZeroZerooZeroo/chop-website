import React from 'react';
import './About.css';

const About = ({ theme }) => {
  const stats = [
    { number: '15+', label: 'Лет опыта' },
    { number: '500+', label: 'Клиентов' },
    { number: '24/7', label: 'Режим работы' },
    { number: '100+', label: 'Сотрудников' }
  ];

  return (
    <section id="about" className="section about" style={{ backgroundColor: theme.cardBackground }}>
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title" style={{ color: theme.primary }}>О нашей компании</h2>
            <p style={{ color: theme.text, marginBottom: '20px' }}>
              <strong>СпецОхрана</strong> - ведущее частное охранное предприятие, 
              предоставляющее полный комплекс услуг по обеспечению безопасности 
              с 2008 года.
            </p>
            <p style={{ color: theme.text, marginBottom: '30px' }}>
              Наша команда состоит из высококвалифицированных специалистов 
              с многолетним опытом работы в силовых структурах. Мы используем 
              современное оборудование и передовые технологии для обеспечения 
              максимальной защиты наших клиентов.
            </p>
            
            <div className="advantages">
              <div className="advantage">
                <span style={{ color: theme.accent }}>✓</span>
                Лицензированная деятельность
              </div>
              <div className="advantage">
                <span style={{ color: theme.accent }}>✓</span>
                Современное оборудование
              </div>
              <div className="advantage">
                <span style={{ color: theme.accent }}>✓</span>
                Круглосуточный мониторинг
              </div>
              <div className="advantage">
                <span style={{ color: theme.accent }}>✓</span>
                Индивидуальный подход
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