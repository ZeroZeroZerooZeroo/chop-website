import React from 'react';
import './Footer.css';

const Footer = ({ theme }) => {
  return (
    <footer className="footer" style={{ backgroundColor: theme.footerBackground }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 style={{ color: 'white' }}>ЧОП СОВА-22</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Профессиональные охранные услуги для бизнеса и частных лиц. 
              Гарантия безопасности и качества.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 style={{ color: 'white' }}>Услуги</h4>
            <ul>
              <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Физическая охрана объектов</a></li>
              <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Пультовая охрана</a></li>
              <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Системы безопасности</a></li>
              <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Охрана мероприятий</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 style={{ color: 'white' }}>Контакты</h4>
            <ul>
              <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>+7 (3852) 60‒14‒60</li>
              <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>sova22.solodovnik@yandex.ru</li>
              <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>г. Барнаул, Южный проезд, 12</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 style={{ color: 'white' }}>Режим работы</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Круглосуточно<br />
              Офис: с 9:00 до 18:00
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2024 ЧОП «СОВА-22». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;