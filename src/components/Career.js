import React, { useState } from 'react';
import './Career.css';

const Career = ({ theme }) => {
  const [activeVacancy, setActiveVacancy] = useState(null);

  const vacancies = [
    {
      id: 1,
      title: 'Охранник',
      salary: 'от 35 000 ₽',
      schedule: 'Сменный график',
      requirements: [
        'Наличие действующей лицензии частного охранника',
        'Опыт работы от 1 года',
        'Физическая подготовка',
        'Отсутствие судимости'
      ],
      conditions: [
        'Официальное трудоустройство',
        'Сменный график работы',
        'Обучение за счет компании',
        'Карьерный рост',
        'Социальный пакет'
      ]
    },
    {
      id: 2,
      title: 'Старший смены',
      salary: 'от 45 000 ₽',
      schedule: 'Сменный график',
      requirements: [
        'Лицензия частного охранника 4-6 разряда',
        'Опыт работы от 3 лет',
        'Навыки руководства коллективом',
        'Знание документации по охране'
      ],
      conditions: [
        'Официальное трудоустройство',
        'Премии по результатам работы',
        'Обучение и повышение квалификации',
        'Ответственность за смену',
        'Социальный пакет + ДМС'
      ]
    },
    {
      id: 3,
      title: 'Оператор пульта охраны',
      salary: 'от 40 000 ₽',
      schedule: 'Суточные смены',
      requirements: [
        'Опыт работы оператором от 1 года',
        'Умение работать с системами видеонаблюдения',
        'Внимательность, стрессоустойчивость',
        'Грамотная речь'
      ],
      conditions: [
        'Работа в современном диспетчерском центре',
        'Суточные смены с последующим отдыхом',
        'Обучение работе с оборудованием',
        'Стабильный график',
        'Социальный пакет'
      ]
    }
  ];

  const toggleVacancy = (id) => {
    setActiveVacancy(activeVacancy === id ? null : id);
  };

  const handleApply = (vacancyTitle) => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
    // Можно добавить автоматическое заполнение вакансии в форме
    setTimeout(() => {
      const messageField = document.querySelector('textarea[name="message"]');
      if (messageField) {
        messageField.value = `Интересует вакансия: ${vacancyTitle}`;
      }
    }, 500);
  };

  return (
    <section id="career" className="section career" style={{ backgroundColor: theme.background }}>
      <div className="container">
        <h2 className="section-title" style={{ color: theme.primary }}>Карьера в СОВА-22</h2>
        <p className="section-subtitle" style={{ color: theme.text }}>
          Присоединяйтесь к нашей команде профессионалов
        </p>
        
        <div className="career-content">
          <div className="vacancies-list">
            <h3 style={{ color: theme.primary, marginBottom: '30px' }}>Открытые вакансии</h3>
            {vacancies.map(vacancy => (
              <div 
                key={vacancy.id} 
                className={`vacancy-item ${activeVacancy === vacancy.id ? 'active' : ''}`}
                style={{ backgroundColor: theme.cardBackground }}
              >
                <div 
                  className="vacancy-header"
                  onClick={() => toggleVacancy(vacancy.id)}
                >
                  <div className="vacancy-title">
                    <h4 style={{ color: theme.primary }}>{vacancy.title}</h4>
                    <div className="vacancy-meta">
                      <span style={{ color: theme.accent, fontWeight: '600' }}>{vacancy.salary}</span>
                      <span style={{ color: theme.text }}>{vacancy.schedule}</span>
                    </div>
                  </div>
                  <div className="vacancy-toggle">
                    {activeVacancy === vacancy.id ? '−' : '+'}
                  </div>
                </div>
                
                <div className={`vacancy-details ${activeVacancy === vacancy.id ? 'visible' : ''}`}>
                  <div className="requirements">
                    <h5 style={{ color: theme.primary }}>Требования:</h5>
                    <ul style={{ color: theme.text }}>
                      {vacancy.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="conditions">
                    <h5 style={{ color: theme.primary }}>Условия:</h5>
                    <ul style={{ color: theme.text }}>
                      {vacancy.conditions.map((cond, index) => (
                        <li key={index}>{cond}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className="btn btn-primary"
                    style={{ backgroundColor: theme.accent }}
                    onClick={() => handleApply(vacancy.title)}
                  >
                    Откликнуться на вакансию
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="career-benefits">
            <h3 style={{ color: theme.primary, marginBottom: '30px' }}>Мы предлагаем</h3>
            <div className="benefits-grid">
              <div className="benefit-item" style={{ backgroundColor: theme.cardBackground }}>
                <div className="benefit-icon" style={{ backgroundColor: theme.accent }}>💼</div>
                <h4 style={{ color: theme.primary }}>Официальное трудоустройство</h4>
                <p style={{ color: theme.text }}>Полный социальный пакет по ТК РФ</p>
              </div>
              
              <div className="benefit-item" style={{ backgroundColor: theme.cardBackground }}>
                <div className="benefit-icon" style={{ backgroundColor: theme.accent }}>🎓</div>
                <h4 style={{ color: theme.primary }}>Обучение</h4>
                <p style={{ color: theme.text }}>Подготовка и повышение квалификации</p>
              </div>
              
              <div className="benefit-item" style={{ backgroundColor: theme.cardBackground }}>
                <div className="benefit-icon" style={{ backgroundColor: theme.accent }}>📈</div>
                <h4 style={{ color: theme.primary }}>Карьерный рост</h4>
                <p style={{ color: theme.text }}>Возможность профессионального развития</p>
              </div>
              
              <div className="benefit-item" style={{ backgroundColor: theme.cardBackground }}>
                <div className="benefit-icon" style={{ backgroundColor: theme.accent }}>🛡️</div>
                <h4 style={{ color: theme.primary }}>Надежность</h4>
                <p style={{ color: theme.text }}>Стабильная работа в серьезной компании</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;