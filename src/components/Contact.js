import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки данных
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Здесь будет реальная отправка на сервер
      console.log('Данные формы:', formData);
      
      setSubmitMessage('success');
      
      // Сброс формы
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      
      // Автоматическое скрытие сообщения через 5 секунд
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
      
    } catch (error) {
      setSubmitMessage('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+78001234567';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@specohrana.ru';
  };

  return (
    <section id="contact" className="section contact" style={{ backgroundColor: theme.background }}>
      <div className="container">
        <h2 className="section-title" style={{ color: theme.primary }}>Свяжитесь с нами</h2>
        <p className="section-subtitle" style={{ color: theme.text }}>
          Готовы обеспечить безопасность вашего бизнеса? Оставьте заявку и мы свяжемся с вами
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 style={{ color: theme.primary, marginBottom: '30px' }}>Контактная информация</h3>
            
            <div className="contact-item">
              <div className="contact-icon" style={{ backgroundColor: theme.accent }}>
                📍
              </div>
              <div>
                <h4 style={{ color: theme.primary }}>Адрес</h4>
                <p style={{ color: theme.text }}>г. Москва, ул. Примерная, д. 123</p>
              </div>
            </div>
            
            <div className="contact-item" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
              <div className="contact-icon" style={{ backgroundColor: theme.accent }}>
                📞
              </div>
              <div>
                <h4 style={{ color: theme.primary }}>Телефон</h4>
                <p style={{ color: theme.text }}>+7 (800) 123-45-67</p>
              </div>
            </div>
            
            <div className="contact-item" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
              <div className="contact-icon" style={{ backgroundColor: theme.accent }}>
                ✉️
              </div>
              <div>
                <h4 style={{ color: theme.primary }}>Email</h4>
                <p style={{ color: theme.text }}>info@specohrana.ru</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon" style={{ backgroundColor: theme.accent }}>
                🕒
              </div>
              <div>
                <h4 style={{ color: theme.primary }}>Режим работы</h4>
                <p style={{ color: theme.text }}>Круглосуточно, без выходных</p>
              </div>
            </div>
          </div>
          
          <div 
            className="contact-form"
            style={{ backgroundColor: theme.cardBackground }}
          >
            {submitMessage === 'success' && (
              <div className="alert alert-success">
                ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
              </div>
            )}
            
            {submitMessage === 'error' && (
              <div className="alert alert-error">
                ❌ Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или позвоните нам.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    borderColor: theme.primary,
                    color: theme.text
                  }}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  pattern="[\+\-0-9\s\(\)]{10,}"
                  style={{
                    borderColor: theme.primary,
                    color: theme.text
                  }}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    borderColor: theme.primary,
                    color: theme.text
                  }}
                />
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    borderColor: theme.primary,
                    color: theme.text,
                    backgroundColor: theme.background
                  }}
                >
                  <option value="">Выберите услугу *</option>
                  <option value="object-security">Охрана объектов</option>
                  <option value="cargo-escort">Сопровождение грузов</option>
                  <option value="event-security">Охрана мероприятий</option>
                  <option value="personal-security">Личная охрана</option>
                  <option value="cctv">Видеонаблюдение</option>
                  <option value="panic-button">Тревожная кнопка</option>
                  <option value="consultation">Консультация</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Дополнительная информация"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    borderColor: theme.primary,
                    color: theme.text
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ 
                  backgroundColor: theme.accent, 
                  width: '100%',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
              
              <p style={{ 
                fontSize: '0.8rem', 
                color: theme.text, 
                marginTop: '15px',
                textAlign: 'center',
                opacity: 0.7
              }}>
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;