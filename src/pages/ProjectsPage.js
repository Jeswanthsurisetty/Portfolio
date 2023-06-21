import React from 'react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1>PROJECTS</h1>
      <div className="project-grid">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Paragraph Word Counter</p>
          <a href="https://jeswanthsurisetty.github.io/Wordcounter">
            <img src="https://www.codewithrandom.com/wp-content/uploads/2022/06/Snapshot_22-06-18_07-18-50.png" alt="Project 1" />
          </a>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Calculator</p>
          <a href="https://jeswanthsurisetty.github.io/Calculator">
            <img src="https://uploads.sitepoint.com/wp-content/uploads/2021/09/1632727310react-calculator-app.jpg" alt="Project 2" />
          </a>
        </div>
        <div className="project-item">
          <h3>Project 3</h3>
          <p>Color Picker</p>
          <a href="https://jeswanthsurisetty.github.io/Colorpicker">
            <img src="https://www.cartoonize.net/wp-content/uploads/2022/11/Cafs.jpg" alt="Project 3" />
          </a>
        </div>
        <div className="project-item">
          <h3>Project 4</h3>
          <p>Fetching Records</p>
          <a href="https://jeswanthsurisetty.github.io/Fetch">
            <img src="https://www.devbabu.com/wp-content/uploads/dummy-users-records-into-mysql-db.png" alt="Project 4" />
          </a>
        </div>
        <div className="project-item">
          <h3>Project 5</h3>
          <p>Age Calculator</p>
          <a href="https://jeswanthsurisetty.github.io/Agecalculator">
            <img src="https://m.media-amazon.com/images/I/41sIvI+zElL.png" alt="Project 5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
