import React from 'react';
import './Reviews.css';

const Reviews = ({ theme }) => {
  const reviews = [
    {
      id: 1,
      name: 'Иван Петров',
      company: 'Торговый центр "Сибирь"',
      text: 'Сотрудничаем с ЧОП "СОВА-22" более 3 лет. Профессиональный подход, быстрое реагирование на любые ситуации.',
      rating: 5
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      company: 'ЖК "Северный"',
      text: 'Охрана нашего жилого комплекса на высшем уровне. Жители довольны, инцидентов за 2 года не было.',
      rating: 5
    },
    {
      id: 3,
      name: 'Алексей Козлов',
      company: 'Складской комплекс',
      text: 'Надежная охрана склада 24/7. Система видеонаблюдения и оперативное реагирование.',
      rating: 4
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className="section reviews" style={{ backgroundColor: theme.background }}>
      <div className="container">
        <h2 className="section-title" style={{ color: theme.primary }}>Отзывы клиентов</h2>
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card" style={{ backgroundColor: theme.cardBackground }}>
              <div className="review-header">
                <div className="reviewer-info">
                  <h4 style={{ color: theme.primary }}>{review.name}</h4>
                  <p style={{ color: theme.text, opacity: 0.8 }}>{review.company}</p>
                </div>
                <div className="review-rating" style={{ color: theme.accent }}>
                  {renderStars(review.rating)}
                </div>
              </div>
              <p style={{ color: theme.text }}>"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;