import React from 'react';
import './Footer.css';

const Footer = ({ theme }) => {
  return (
    <footer className="footer" style={{ backgroundColor: theme.footerBackground }}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 style={{ color: 'white' }}>СпецОхрана</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Профессиональные охранные услуги для бизнеса и частных лиц. 
              Гарантия безопасности и качества.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 style={{ color: 'white' }}>Услуги</h4>
            <ul>
              <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Охрана объектов</a></li>
              <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Сопровождение грузов</a></li>
              <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Охрана мероприятий</a></li>
              <li><a href="#services" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Личная охрана</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 style={{ color: 'white' }}>Контакты</h4>
            <ul>
              <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>+7 (800) 123-45-67</li>
              <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>info@specohrana.ru</li>
              <li style={{ color: 'rgba(255, 255, 255, 0.8)' }}>г. Москва, ул. Примерная, д. 123</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 style={{ color: 'white' }}>Режим работы</h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Круглосуточно<br />
              Без выходных
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            © 2023 СпецОхрана. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;