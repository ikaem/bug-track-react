// src\components\shared\info-bar.component.tsx

import InfoBarStat from "./info-bar-stat.component";
import PageOptions from "./page-options.component";

const InfoBar: React.FC = ({ children }) => {
  // TODO: this will require object for stat props
  // - svg
  // - label
  // - stat
  // and this is twice, for stat 1 and stat 2
  return (
    <section className="main-content_project-info-bar">
      <div className="project-info-bar_upper-part-info">
        <h2>Label here</h2>
        <button className="upper-part-info_project-options-toggler">
          <span>&gt;</span>
          <span>Project options</span>
        </button>
        {/* absolute project options container start */}
        <PageOptions />
        {/* absolute project options container end */}
      </div>
      <div className="project-info-bar_lower-part-info">
        <div className="lower-part-info_project-stats">
          <InfoBarStat />
          <InfoBarStat />
        </div>
        <div className="lower-part-info_project-actions">{children}</div>
      </div>
    </section>
  );
};

export default InfoBar;
