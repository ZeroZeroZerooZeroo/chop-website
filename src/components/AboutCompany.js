import React from 'react';
import './AboutCompany.css';

const AboutCompany = ({ theme }) => {
  return (
    <section id="about-company" className="section about-company" style={{ backgroundColor: theme.cardBackground }}>
      <div className="container">
        <div className="about-company-content">
          <div className="about-company-text">
            <h2 className="section-title" style={{ color: theme.primary }}>О компании</h2>
            <div className="company-info">
              <h3 style={{ color: theme.primary }}>История создания «СОВА-22»</h3>
              <p style={{ color: theme.text }}>
                Частное охранное предприятие «СОВА-22» было основано в Барнауле с целью обеспечения комплексной безопасности бизнеса и частных лиц.
              </p>
              
              <h4 style={{ color: theme.primary, marginTop: '20px' }}>Наша миссия</h4>
              <p style={{ color: theme.text }}>
                Безопасность и порядок для людей и бизнеса. Мы обеспечиваем надежную защиту вашего имущества, сотрудников и клиентов.
              </p>
            </div>
          </div>
          
          <div className="about-company-visual">
            <div className="company-photo">
              <img 
                src="/images/office-photo.jpg" 
                alt="Офис ЧОП СОВА-22"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="company-photo-placeholder" style={{ 
                backgroundColor: theme.background,
                border: `2px dashed ${theme.primary}`,
                display: 'none'
              }}>
                <p style={{ color: theme.text }}>Фото офиса или группы охранников</p>
              </div>
            </div>
            
            <div className="documents-section">
              <h4 style={{ color: theme.primary }}>Документы</h4>
              <div className="documents-grid">
                <div className="document-item" style={{ backgroundColor: theme.background }}>
                  <span style={{ color: theme.primary }}>📄</span>
                  <p style={{ color: theme.text }}>Лицензия МВД</p>
                </div>
                <div className="document-item" style={{ backgroundColor: theme.background }}>
                  <span style={{ color: theme.primary }}>📄</span>
                  <p style={{ color: theme.text }}>Сертификаты</p>
                </div>
                <div className="document-item" style={{ backgroundColor: theme.background }}>
                  <span style={{ color: theme.primary }}>📄</span>
                  <p style={{ color: theme.text }}>Благодарственные письма</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;