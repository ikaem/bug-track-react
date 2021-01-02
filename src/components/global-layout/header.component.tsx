// src\components\layout\header.component.tsx

import { Link } from "react-router-dom";
import styled from "styled-components";

import colors from "../../styles/colors.constant";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header: React.FC = () => {
  return (
    <HeaderStyled colors={colors} className="main-header">
      <nav className="main-header_header-nav">
        <ul className="header-nav_left-nav">
          <li className="left-nav_nav-option">
            <Link to="/" title="Home">
              <span>&gt;&gt;</span>
              <span className="desktop-size-label">Home</span>
            </Link>
          </li>
        </ul>
        <div className="header-nav_logo-container">
          <Logo />
        </div>
        <ul className="header-nav_right-nav">
          <li className="right-nav_nav-option">
            <Link to="#">
              <span>P+</span>
              <span className="desktop-size-label">Add project</span>
            </Link>
          </li>
          <li className="right-nav_nav-option">
            <Link to="#" className="avatar-container">
              <img src="..." alt="" />
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="/" title="Home">
          Home
        </Link>
        <Link to="/project" title="Project">
          Project
        </Link>
        <Link to="/bug" title="Bug">
          Bug
        </Link>
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header<{ colors: typeof colors }>`
  background-color: ${({ colors }) => colors.blue};
  padding: 1rem;

  .desktop-size-label {
    display: none;
  }

  a {
    color: white;
  }

  nav {
    display: flex;
    align-items: center;

    > ul {
      display: flex;
      flex: 0.4;

      &.header-nav_left-nav {
        display: flex;
        justify-content: flex-start;
      }

      &.header-nav_right-nav {
        display: flex;
        justify-content: flex-end;
      }
    }

    .header-nav_logo-container {
      flex: 0.2;
      display: flex;
      place-items: center;
    }
  }
`;
