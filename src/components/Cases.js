import React from 'react';
import './Cases.css';

const Cases = ({ theme }) => {
  const cases = [
    {
      id: 1,
      type: 'Торговый центр',
      period: '2 года',
      result: 'Снижение краж на 95%',
      description: 'Охрана крупного торгового центра площадью 15 000 м²',
      image: '/images/case1.jpg'
    },
    {
      id: 2,
      type: 'Складской комплекс',
      period: '1.5 года',
      result: 'Нулевые потери товара',
      description: 'Комплексная охрана склада с системой видеонаблюдения',
      image: '/images/case2.jpg'
    },
    {
      id: 3,
      type: 'Жилой комплекс',
      period: '3 года',
      result: 'Полная безопасность жителей',
      description: 'Охрана элитного жилого комплекса с контролем доступа',
      image: '/images/case3.jpg'
    },
    {
      id: 4,
      type: 'Производственное предприятие',
      period: '4 года',
      result: 'Стабильная работа без инцидентов',
      description: 'Охрана территории и периметра промышленного объекта',
      image: '/images/case4.jpg'
    }
  ];

  return (
    <section id="cases" className="section cases" style={{ backgroundColor: theme.background }}>
      <div className="container">
        <h2 className="section-title" style={{ color: theme.primary }}>Наши объекты</h2>
        <p className="section-subtitle" style={{ color: theme.text }}>
          Реальные кейсы охраняемых объектов с разрешения клиентов
        </p>
        
        <div className="cases-grid">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="case-card" style={{ backgroundColor: theme.cardBackground }}>
              <div className="case-image">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.type}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="case-image-placeholder" style={{ 
                  backgroundColor: theme.primary + '20',
                  border: `2px dashed ${theme.primary}`,
                  display: 'none'
                }}>
                  <p style={{ color: theme.text }}>Фото объекта</p>
                </div>
              </div>
              <div className="case-content">
                <h3 style={{ color: theme.primary }}>{caseItem.type}</h3>
                <p style={{ color: theme.text }}>{caseItem.description}</p>
                <div className="case-details">
                  <div className="case-detail">
                    <span style={{ color: theme.primary, fontWeight: '600' }}>Период работы:</span>
                    <span style={{ color: theme.text }}>{caseItem.period}</span>
                  </div>
                  <div className="case-detail">
                    <span style={{ color: theme.primary, fontWeight: '600' }}>Результат:</span>
                    <span style={{ color: theme.text }}>{caseItem.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;