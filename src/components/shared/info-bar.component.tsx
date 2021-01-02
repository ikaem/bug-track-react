// src\components\shared\info-bar.component.tsx

import styled from "styled-components";

import InfoBarStat from "./info-bar-stat.component";
import PageOptions from "./page-options.component";

import colors from "../../styles/colors.constant";

const InfoBar: React.FC = ({ children }) => {
  // TODO: this will require object for stat props
  // - svg
  // - label
  // - stat
  // and this is twice, for stat 1 and stat 2
  return (
    <InfoBarStyled colors={colors} className="main-content_project-info-bar">
      <div className="project-info-bar_upper-part-info">
        <h2>Label here</h2>
        <button className="upper-part-info_project-options-toggler">
          <span>&gt;&gt;</span>
          <span className="desktop-size-label">Project options</span>
        </button>
        {/* absolute project options container start */}
        <div className="upper-part-info_options-wrapper">
          <PageOptions />
        </div>
        {/* absolute project options container end */}
      </div>
      <div className="project-info-bar_lower-part-info">
        <div className="lower-part-info_project-stats">
          <InfoBarStat />
          <InfoBarStat />
        </div>
        <div className="lower-part-info_project-actions">{children}</div>
      </div>
    </InfoBarStyled>
  );
};

export default InfoBar;

const InfoBarStyled = styled.section<{ colors: typeof colors }>`
  display: flex;
  flex-direction: column;

  .desktop-size-label {
    display: none;
  }

  > div {
    display: flex;

    &.project-info-bar_upper-part-info {
      justify-content: space-between;
      position: relative;
      margin-bottom: 1rem;

      > .upper-part-info_options-wrapper {
        position: absolute;

        /* TODO: temporary display: none for the options */
        display: none;
      }
    }

    &.project-info-bar_lower-part-info {
      justify-content: flex-start;

      .lower-part-info_project-stats,
      .lower-part-info_project-actions {
        display: flex;
      }
    }
  }
`;
