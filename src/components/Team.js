import React from 'react';
import './Team.css';

const Team = ({ theme }) => {
  const teamMembers = [
    {
      id: 1,
      name: 'Александр Петров',
      position: 'Директор по безопасности',
      experience: '15 лет в охране',
      image: '👨‍💼'
    },
    {
      id: 2,
      name: 'Ирина Смирнова',
      position: 'Менеджер проектов',
      experience: '10 лет в управлении',
      image: '👩‍💼'
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      position: 'Начальник охраны',
      experience: '12 лет в силовых структурах',
      image: '👮'
    },
    {
      id: 4,
      name: 'Олег Николаев',
      position: 'Специалист по кибербезопасности',
      experience: '8 лет в IT-безопасности',
      image: '💻'
    }
  ];

  return (
    <section id="team" className="section team">
      <div className="container">
        <h2 className="section-title" style={{ color: theme.text }}>Наша команда</h2>
        <div className="grid grid-2">
          {teamMembers.map(member => (
            <div key={member.id} className="card team-card fade-in">
              <div className="team-member-image">
                <div className="avatar" style={{ backgroundColor: theme.primary }}>
                  {member.image}
                </div>
              </div>
              <div className="team-member-info">
                <h3 style={{ color: theme.text }}>{member.name}</h3>
                <p className="position" style={{ color: theme.primary }}>{member.position}</p>
                <p className="experience">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;