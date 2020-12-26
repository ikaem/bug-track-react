// src\pages\home.page.tsx

import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="main-content">
      {/* sidebar navigation start here*/}
      <nav className="main-content_sidebar-nav">
        <h3>
          <span>&gt;</span>
          <span>Projects</span>
          <span>23</span>
        </h3>
        <ul className="sidebar-nav_projects-nav">
          <li className="projects-nav_option">
            <button>
              <span>&gt;</span>
              <span>Personal</span>
              <span>17</span>
            </button>
          </li>
          <li className="projects-nav_option">
            <button>
              <span>&gt;</span>
              <span>Team</span>
              <span>6</span>
            </button>
          </li>
        </ul>
      </nav>
      {/* sidebar navigation end here*/}
      {/* recent projects section start here */}
      {/* TODO: this can be one component with the personal projects and team projects - it is just a mapper with different heading, number of items that map over */}
      <section className="main-content_recent-projects-section">
        <h3>
          <span>&gt;</span>
          <span>Recent Projects</span>
        </h3>
        <ul className="recent-projects-section_projects-list">
          <li className="projects-list_project-brief">
            <h4>Some project name here</h4>
            <span>Completed: {"56"}%</span>
            <span>Total bugs: {"42"}</span>
          </li>
          <li className="projects-list_project-brief">
            <h4>Some project name here</h4>
            <span>Completed: {"56"}%</span>
            <span>Total bugs: {"42"}</span>
          </li>
          <li className="projects-list_project-brief">
            <h4>Some project name here</h4>
            <span>Completed: {"56"}%</span>
            <span>Total bugs: {"42"}</span>
          </li>
        </ul>
      </section>
      {/* recent projects section ends here */}
      <section className="main-content_rest-projects-section">
        <h3>
          <span>&gt;</span>
          <span>Recent Projects</span>
        </h3>
        <ul className="rest-projects-section_projects-list">
          <li className="projects-list_project-brief">
            <h4>Some project name here</h4>
            <span>Completed: {"56"}%</span>
            <span>Total bugs: {"42"}</span>
          </li>
          <li className="projects-list_project-brief">
            <h4>Some project name here</h4>
            <span>Completed: {"56"}%</span>
            <span>Total bugs: {"42"}</span>
          </li>
          <li className="projects-list_project-brief">
            <h4>Some project name here</h4>
            <span>Completed: {"56"}%</span>
            <span>Total bugs: {"42"}</span>
          </li>
          <li className="projects-list_project-brief">
            <h4>Some project name here</h4>
            <span>Completed: {"56"}%</span>
            <span>Total bugs: {"42"}</span>
          </li>
          <li className="projects-list_project-brief">
            <h4>Some project name here</h4>
            <span>Completed: {"56"}%</span>
            <span>Total bugs: {"42"}</span>
          </li>
          <li className="projects-list_project-brief">
            <h4>Some project name here</h4>
            <span>Completed: {"56"}%</span>
            <span>Total bugs: {"42"}</span>
          </li>
        </ul>
      </section>
      {/* recent projects section ends here */}
    </main>
  );
};

export default Home;
