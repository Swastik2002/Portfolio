import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    { title: 'TrustMed: Where Trust meets medication', description: 'It is a project based on HTML,CSS,JAVASCRIPT,mysql and PHP.It majorly focusses on providing the customers with authentified prescribed medicines to stop illegal supply of Drugs in the medicine market.The project was Created by a 2-member team of Sreya Varghese and Swastik Garg', link: 'https://swastik2002.github.io/TrustMed/' },
    { title: 'NewsMonkeyyS: Your Daily Dosage of News', description: 'This app is based on ReactJS,CSS,JAVASCRIPT and uses newsAPI to provide latest news on various categories such as Science,Sports,Technology,Entertainment, etc.', link: 'https://example.com/project2' },
    {title: 'TextUtils: Your Text Editting Companion', description: 'this app is based on ReactJS,CSS,JAVASCRIPT. It is a text-editor which allows the user to convert the text to Uppercase,LowerCase,ExtractEmails and much more!', link: ' https://sreyavarghese.github.io/React-Text-Utils/' },
    
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

