import React from 'react';
import Project from '../components/Project'; // Import Project component

const Portfolio = () => {
  // Dummy project data
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      imageUrl: 'project1.jpg',
      deployedUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/username/project1',
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="projects">
          {projects.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;