import React, { useState } from 'react';
import './Calculator.css';

const Calculator = ({ theme }) => {
  const [formData, setFormData] = useState({
    objectType: '',
    area: '',
    shifts: '1',
    securityLevel: 'standard'
  });

  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const objectTypes = [
    { value: 'office', label: 'Офисное помещение', basePrice: 5000 },
    { value: 'store', label: 'Магазин', basePrice: 8000 },
    { value: 'warehouse', label: 'Склад', basePrice: 12000 },
    { value: 'shopping_center', label: 'Торговый центр', basePrice: 25000 },
    { value: 'residential', label: 'Жилой комплекс', basePrice: 15000 },
    { value: 'industrial', label: 'Промышленный объект', basePrice: 20000 }
  ];

  const calculatePrice = (e) => {
    e.preventDefault();
    
    const selectedObject = objectTypes.find(obj => obj.value === formData.objectType);
    if (!selectedObject) return;

    let price = selectedObject.basePrice;
    
    // Учет площади
    if (formData.area > 100) {
      price += (formData.area - 100) * 50;
    }
    
    // Учет смен
    price *= parseInt(formData.shifts);
    
    // Учет уровня безопасности
    if (formData.securityLevel === 'premium') {
      price *= 1.5;
    } else if (formData.securityLevel === 'vip') {
      price *= 2;
    }

    setCalculatedPrice(Math.round(price));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="calculator" className="section calculator" style={{ backgroundColor: theme.background }}>
      <div className="container">
        <h2 className="section-title" style={{ color: theme.primary }}>Калькулятор стоимости охраны</h2>
        <p className="section-subtitle" style={{ color: theme.text }}>
          Рассчитайте примерную стоимость охраны вашего объекта
        </p>
        
        <div className="calculator-content">
          <div className="calculator-form" style={{ backgroundColor: theme.cardBackground }}>
            <form onSubmit={calculatePrice}>
              <div className="form-group">
                <label style={{ color: theme.primary }}>Тип объекта *</label>
                <select
                  name="objectType"
                  value={formData.objectType}
                  onChange={handleChange}
                  required
                  style={{
                    borderColor: theme.primary,
                    color: theme.text,
                    backgroundColor: theme.background
                  }}
                >
                  <option value="">Выберите тип объекта</option>
                  {objectTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label style={{ color: theme.primary }}>Площадь объекта (м²)</label>
                <input
                  type="number"
                  name="area"
                  placeholder="Например: 150"
                  value={formData.area}
                  onChange={handleChange}
                  style={{
                    borderColor: theme.primary,
                    color: theme.text
                  }}
                />
              </div>
              
              <div className="form-group">
                <label style={{ color: theme.primary }}>Количество смен в сутки</label>
                <select
                  name="shifts"
                  value={formData.shifts}
                  onChange={handleChange}
                  style={{
                    borderColor: theme.primary,
                    color: theme.text,
                    backgroundColor: theme.background
                  }}
                >
                  <option value="1">1 смена (8 часов)</option>
                  <option value="2">2 смены (16 часов)</option>
                  <option value="3">3 смены (24 часа)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label style={{ color: theme.primary }}>Уровень безопасности</label>
                <select
                  name="securityLevel"
                  value={formData.securityLevel}
                  onChange={handleChange}
                  style={{
                    borderColor: theme.primary,
                    color: theme.text,
                    backgroundColor: theme.background
                  }}
                >
                  <option value="standard">Стандартный</option>
                  <option value="premium">Премиум</option>
                  <option value="vip">VIP охрана</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ 
                  backgroundColor: theme.accent, 
                  width: '100%'
                }}
              >
                Рассчитать стоимость
              </button>
            </form>
          </div>
          
          <div className="calculator-result">
            {calculatedPrice ? (
              <div className="result-card" style={{ backgroundColor: theme.cardBackground }}>
                <h3 style={{ color: theme.primary }}>Примерная стоимость</h3>
                <div className="price" style={{ color: theme.accent }}>
                  {calculatedPrice.toLocaleString()} ₽/месяц
                </div>
                <p style={{ color: theme.text }}>
                  * Точная стоимость рассчитывается после осмотра объекта
                </p>
                <button 
                  className="btn btn-primary"
                  style={{ backgroundColor: theme.accent }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Получить точный расчет
                </button>
              </div>
            ) : (
              <div className="result-placeholder" style={{ backgroundColor: theme.cardBackground }}>
                <p style={{ color: theme.text }}>Заполните форму для расчета стоимости</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;