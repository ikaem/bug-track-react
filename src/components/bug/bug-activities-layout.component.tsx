// src\components\bug\bug-activities-layout.component.tsx

import BugChecklistsContainer from "./bug-checklists-container.component";
import BugCommentsContainer from "./bug-comments-container.component";
import BugDescription from "./bug-description.component";

const BugActivitiesLayout: React.FC = ({ children }) => {
  return (
    <div className="main-content_bug-detailed">
      <BugDescription />
      <BugChecklistsContainer />
      <BugCommentsContainer />
    </div>
  );
};

export default BugActivitiesLayout;
