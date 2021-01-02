// src\components\home\project-brief.component.tsx

const ProjectBrief: React.FC = () => {
  return (
    <li className="projects-list_project-brief">
      <h4>Some project name here</h4>
      <span>Completed: {"56"}%</span>
      <span>Total bugs: {"42"}</span>
    </li>
  );
};

export default ProjectBrief;
