// src\components\layout\layout.component.tsx

import styled from "styled-components";

import Header from "./header.component";
import GlobalStyle from "../../styles/global.style";

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutStyled>
      <GlobalStyle />
      <Header />
      {children}
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  height: 100%;
  background-color: white;

  display: flex;
  flex-direction: column;
`;
