// src\components\home\projects-mapper.component.tsx

import ProjectBrief from "./project-brief.component";

const ProjectsList: React.FC = () => {
  return (
    <section className="main-content_recent-projects-section">
      <h3>
        <span>&gt;</span>
        <span>Recent Projects</span>
      </h3>
      <ul className="recent-projects-section_projects-list">
        {/* project brief component starts here */}
        {/* COMPONENT */}
        <ProjectBrief />
        {/* project brief component eds here */}
      </ul>
    </section>
  );
};

export default ProjectsList;
