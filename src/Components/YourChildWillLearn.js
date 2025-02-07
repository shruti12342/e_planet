import React from 'react';
import './YourChildWillLearn.css'; // Import the CSS file

const YourChildWillLearn = () => {
  const skills = [
    { id: 1, icon: '/path/to/logic-icon.png', label: 'Logic' },
    { id: 2, icon: '/path/to/structure-icon.png', label: 'Structure' },
    { id: 3, icon: '/path/to/creative-thinking-icon.png', label: 'Creative Thinking' },
    { id: 4, icon: '/path/to/sequencing-icon.png', label: 'Sequencing' },
    { id: 5, icon: '/path/to/algorithmic-thinking-icon.png', label: 'Algorithmic Thinking' },
  ];

  return (
    <div className="your-child-will-learn">
      <h2>Your Child Will Learn</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div key={skill.id} className="skill">
            <img src={skill.icon} alt={skill.label} className="skill-icon" />
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourChildWillLearn;
