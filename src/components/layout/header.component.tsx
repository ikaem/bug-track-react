// src\components\layout\header.component.tsx

import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <nav className="main-header_header-nav">
        <ul className="header-nav_left-nav">
          <li className="left-nav_nav-option">
            <Link to="/">
              <span>&gt;</span>
              <span>Home | </span>
            </Link>
          </li>
          <li className="left-nav_nav-option">
            <Link to="/project">
              <span>&gt;</span>
              <span>Project | </span>
            </Link>
          </li>
          <li className="left-nav_nav-option">
            <Link to="/bug">
              <span>&gt;</span>
              <span>Bug | </span>
            </Link>
          </li>
        </ul>
        <div className="header-nav_logo-container">
          <span>&gt;</span>
          <span>BUG track.</span>
        </div>
        <ul className="header-nav_right-nav">
          <li className="right-nav_nav-option">
            <Link to="#">
              <span>P+</span>
              <span>Add project</span>
            </Link>
          </li>
          <li className="right-nav_nav-option">
            <Link to="#" className="avatar-container">
              <img src="..." alt="" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
