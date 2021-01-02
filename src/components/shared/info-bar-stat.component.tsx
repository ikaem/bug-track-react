// src\components\shared\info-bar-stat.component.tsx

import styled from "styled-components";

const InfoBarStat: React.FC = () => {
  return (
    <InfoBarStatStyled className="project-stats_stat">
      <span>&gt;&gt;</span>
      <span className="desktop-size-label">Total bugs:</span>
      <span>64</span>
    </InfoBarStatStyled>
  );
};

export default InfoBarStat;

const InfoBarStatStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  border-right: 1px solid gray;
  margin-right: 1rem;

  > :first-child {
    margin-right: 0.5rem;
  }

  .desktop-size-label {
    display: none;
  }
`;
