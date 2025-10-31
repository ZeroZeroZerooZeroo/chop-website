import React from 'react';
import './Services.css';

const Services = ({ theme }) => {
  const services = [
    {
      icon: '🏢',
      title: 'Охрана объектов',
      description: 'Комплексная охрана коммерческих и промышленных объектов любой сложности'
    },
    {
      icon: '🚚',
      title: 'Сопровождение грузов',
      description: 'Безопасная транспортировка ценных грузов по всей территории страны'
    },
    {
      icon: '🎭',
      title: 'Охрана мероприятий',
      description: 'Обеспечение безопасности на массовых мероприятиях, концертах, выставках'
    },
    {
      icon: '💼',
      title: 'Личная охрана',
      description: 'Персональная охрана для руководителей и публичных лиц'
    },
    {
      icon: '📹',
      title: 'Видеонаблюдение',
      description: 'Установка и обслуживание систем видеонаблюдения и контроля доступа'
    },
    {
      icon: '🚨',
      title: 'Тревожная кнопка',
      description: 'Установка систем экстренного вызова охраны на объектах'
    }
  ];

  const handleLearnMore = (serviceTitle) => {
    alert(`Подробная информация об услуге: ${serviceTitle}\n\nСвяжитесь с нами для получения детальной консультации.`);
  };

  const handleOrderService = (serviceTitle) => {
    document.getElementById('contact').scrollIntoView({ 
      behavior: 'smooth' 
    });
    // Можно добавить автоматическое заполнение выбранной услуги в форме
    setTimeout(() => {
      const serviceSelect = document.querySelector('select[name="service"]');
      if (serviceSelect) {
        const option = Array.from(serviceSelect.options).find(opt => 
          opt.text.includes(serviceTitle.split(' ')[0])
        );
        if (option) serviceSelect.value = option.value;
      }
    }, 500);
  };

  return (
    <section id="services" className="section services" style={{ backgroundColor: theme.background }}>
      <div className="container">
        <h2 className="section-title" style={{ color: theme.primary }}>Наши услуги</h2>
        <p className="section-subtitle" style={{ color: theme.text }}>
          Полный спектр охранных услуг для обеспечения безопасности вашего бизнеса и имущества
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ 
                backgroundColor: theme.cardBackground,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div 
                className="service-icon"
                style={{ backgroundColor: theme.accent }}
              >
                {service.icon}
              </div>
              <h3 style={{ color: theme.primary }}>{service.title}</h3>
              <p style={{ color: theme.text }}>{service.description}</p>
              <div className="service-actions">
                <button 
                  className="btn btn-secondary service-btn"
                  style={{ 
                    color: theme.primary, 
                    borderColor: theme.primary 
                  }}
                  onClick={() => handleLearnMore(service.title)}
                >
                  Подробнее
                </button>
                <button 
                  className="btn btn-primary service-btn"
                  style={{ backgroundColor: theme.accent }}
                  onClick={() => handleOrderService(service.title)}
                >
                  Заказать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;