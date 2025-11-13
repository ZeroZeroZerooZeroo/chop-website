import React, { useState, useEffect } from 'react';
import './Career.css';

const Career = ({ theme }) => {
  const [activeVacancy, setActiveVacancy] = useState(null);
  const [vacancies, setVacancies] = useState([]); // всегда массив по умолчанию
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVacancies = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8080/api/vacancies?active=true');
      
      if (!response.ok) {
        throw new Error('Ошибка загрузки вакансий');
      }
      
      const data = await response.json();
      // ВАЖНО: гарантируем что vacancies всегда массив
      const safeData = Array.isArray(data) ? data : [];
      setVacancies(safeData);
      setError(null);
    } catch (err) {
      setError('Не удалось загрузить вакансии');
      console.error('Error fetching vacancies:', err);
      // При ошибке тоже устанавливаем пустой массив
      setVacancies([]);
    } finally {
      setLoading(false);
    }
  };

  // Загружаем вакансии при монтировании компонента
  useEffect(() => {
    fetchVacancies();
  }, []);

  const toggleVacancy = (id) => {
    setActiveVacancy(activeVacancy === id ? null : id);
  };

  const handleApply = (vacancyTitle) => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
    
    setTimeout(() => {
      const messageField = document.querySelector('textarea[name="message"]');
      if (messageField) {
        messageField.value = `Интересует вакансия: ${vacancyTitle}`;
        messageField.focus();
      }
    }, 500);
  };

  // Если загрузка
  if (loading) {
    return (
      <section id="career" className="section career" style={{ backgroundColor: theme.background }}>
        <div className="container">
          <h2 className="section-title" style={{ color: theme.primary }}>Карьера в СОВА-22</h2>
          <div className="loading" style={{ textAlign: 'center', padding: '40px', color: theme.text }}>
            Загрузка вакансий...
          </div>
        </div>
      </section>
    );
  }

  // Если ошибка
  if (error) {
    return (
      <section id="career" className="section career" style={{ backgroundColor: theme.background }}>
        <div className="container">
          <h2 className="section-title" style={{ color: theme.primary }}>Карьера в СОВА-22</h2>
          <div className="error" style={{ textAlign: 'center', padding: '40px', color: theme.text }}>
            {error}
            <button 
              onClick={fetchVacancies}
              style={{ 
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: theme.accent,
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Попробовать снова
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ВАЖНО: vacancies всегда массив, но на всякий случай проверяем
  const safeVacancies = Array.isArray(vacancies) ? vacancies : [];

  return (
    <section id="career" className="section career" style={{ backgroundColor: theme.background }}>
      <div className="container">
        <h2 className="section-title" style={{ color: theme.primary }}>Карьера в СОВА-22</h2>
        <p className="section-subtitle" style={{ color: theme.text }}>
          Присоединяйтесь к нашей команде профессионалов
        </p>
        
        <div className="career-content">
          <div className="vacancies-list">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h3 style={{ color: theme.primary, margin: 0 }}>Открытые вакансии</h3>
              <button 
                onClick={fetchVacancies}
                style={{
                  padding: '8px 16px',
                  backgroundColor: 'transparent',
                  color: theme.accent,
                  border: `1px solid ${theme.accent}`,
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Обновить
              </button>
            </div>
            
            {safeVacancies.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '40px', 
                color: theme.text,
                backgroundColor: theme.cardBackground,
                borderRadius: '10px'
              }}>
                На данный момент открытых вакансий нет
              </div>
            ) : (
              safeVacancies.map(vacancy => (
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
                        {vacancy.requirements && vacancy.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="conditions">
                      <h5 style={{ color: theme.primary }}>Условия:</h5>
                      <ul style={{ color: theme.text }}>
                        {vacancy.conditions && vacancy.conditions.map((cond, index) => (
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
              ))
            )}
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