// src\components\home\home-navigation.component.tsx

const HomeNavigation: React.FC = () => {
  return (
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
  );
};

export default HomeNavigation;
