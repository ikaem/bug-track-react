// src\pages\home.page.tsx

import { Link } from "react-router-dom";

import HomeNavigation from "../components/home/home-navigation.component";
import ProjectsList from "../components/home/projects-list.component";

const Home: React.FC = () => {
  return (
    <main className="main-content">
      <HomeNavigation />
      <ProjectsList />
      <ProjectsList />
    </main>
  );
};

export default Home;
