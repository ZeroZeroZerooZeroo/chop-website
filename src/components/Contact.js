import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
    
    try {
      
      const response = await fetch('http://localhost:8080/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Заявка создана:', result);
      
      setSubmitMessage('success');
      setFormData({ name: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setSubmitMessage('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+73852601460';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Здравствуйте! Хочу узнать о ваших услугах охраны.');
    window.open(`https://wa.me/79601234567?text=${message}`, '_blank');
  };

  const handleTelegramClick = () => {
    const message = encodeURIComponent('Здравствуйте! Хочу узнать о ваших услугах охраны.');
    window.open(`https://t.me/sova22_barnaul?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="section contact" style={{ backgroundColor: theme.background }}>
      <div className="container">
        <h2 className="section-title" style={{ color: theme.primary }}>Контакты</h2>
        <p className="section-subtitle" style={{ color: theme.text }}>
          Оставьте номер, и мы подскажем оптимальное решение
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card" style={{ backgroundColor: theme.cardBackground }}>
              <h3 style={{ color: theme.primary, marginBottom: '30px' }}>Свяжитесь с нами</h3>
              
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon" style={{ backgroundColor: theme.accent }}>
                    📍
                  </div>
                  <div>
                    <h4 style={{ color: theme.primary }}>Адрес офиса</h4>
                    <p style={{ color: theme.text }}>г. Барнаул, Южный проезд, 12</p>
                  </div>
                </div>
                
                <div className="contact-item" onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
                  <div className="contact-icon" style={{ backgroundColor: theme.accent }}>
                    📞
                  </div>
                  <div>
                    <h4 style={{ color: theme.primary }}>Телефоны</h4>
                    <p style={{ color: theme.text }}>+7 (3852) 60‒14‒60</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon" style={{ backgroundColor: theme.accent }}>
                    ✉️
                  </div>
                  <div>
                    <h4 style={{ color: theme.primary }}>Email</h4>
                    <p style={{ color: theme.text }}>sova22.solodovnik@yandex.ru</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon" style={{ backgroundColor: theme.accent }}>
                    🕒
                  </div>
                  <div>
                    <h4 style={{ color: theme.primary }}>Режим работы</h4>
                    <p style={{ color: theme.text }}>Круглосуточно (охрана)</p>
                    <p style={{ color: theme.text }}>Офис: с 9:00 до 18:00</p>
                  </div>
                </div>
              </div>

              <div className="contact-social">
                <h4 style={{ color: theme.primary, marginBottom: '15px' }}>Быстрая связь</h4>
                <div className="social-buttons">
                  <button 
                    className="btn btn-social whatsapp"
                    onClick={handleWhatsAppClick}
                    style={{ backgroundColor: '#25D366' }}
                  >
                    WhatsApp
                  </button>
                  <button 
                    className="btn btn-social telegram"
                    onClick={handleTelegramClick}
                    style={{ backgroundColor: '#0088cc' }}
                  >
                    Telegram
                  </button>
                  <button 
                    className="btn btn-social phone"
                    onClick={handlePhoneClick}
                    style={{ backgroundColor: theme.accent }}
                  >
                    Позвонить
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section">
            <div className="contact-form-card" style={{ backgroundColor: theme.cardBackground }}>
              <h3 style={{ color: theme.primary, marginBottom: '20px' }}>Оставить заявку</h3>
              
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
                      borderColor: theme.primary + '40',
                      color: theme.text,
                      backgroundColor: theme.background
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
                      borderColor: theme.primary + '40',
                      color: theme.text,
                      backgroundColor: theme.background
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
                      borderColor: theme.primary + '40',
                      color: theme.text,
                      backgroundColor: theme.background
                    }}
                  >
                    <option value="">Выберите услугу *</option>
                    <option value="physical-security">Физическая охрана объектов</option>
                    <option value="remote-security">Пультовая охрана</option>
                    <option value="security-systems">Установка систем безопасности</option>
                    <option value="event-security">Охрана мероприятий</option>
                    <option value="personal-security">Личная охрана</option>
                    <option value="cargo-escort">Сопровождение грузов</option>
                    <option value="career">Трудоустройство</option>
                    <option value="consultation">Консультация</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Комментарий или вопрос"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      borderColor: theme.primary + '40',
                      color: theme.text,
                      backgroundColor: theme.background
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
              </form>
            </div>
          </div>
        </div>
        
        <div className="map-section">
          <h3 style={{ color: theme.primary, marginBottom: '20px', textAlign: 'center' }}>Мы находимся в Барнауле</h3>
          <div className="map-container">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=83.630674%2C53.312141&z=17&pt=83.630674,53.312141,pm2grm"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen
              title="Офис ЧОП Сова в Барнауле"
            />
          </div>
          <p style={{ 
            textAlign: 'center', 
            color: theme.text, 
            marginTop: '15px',
            opacity: 0.8,
            fontSize: '0.9rem'
          }}>
            Обслуживаем Барнаул и весь Алтайский край
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;