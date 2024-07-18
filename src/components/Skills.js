import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsList = ['HTML', 'CSS', 'JavaScript', 'ReactJS','C++','MySQL','PHP'];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
