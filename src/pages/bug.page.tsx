// src\pages\bug.page.tsx

import InfoBar from "../components/shared/info-bar.component";
import Action from "../components/shared/action.component";
import BugActivitiesLayout from "../components/bug/bug-activities-layout.component";

const Bug: React.FC = () => {
  return (
    <main className="main-content_bug-info-bar">
      {/* bug info component start here */}
      <InfoBar>
        <Action>
          <div>Action children placeholder</div>
        </Action>
        <Action>
          <div>Action children placeholder</div>
        </Action>
        <Action>
          <div>Action children placeholder</div>
        </Action>
      </InfoBar>
      {/* bug info component end here */}

      <BugActivitiesLayout />
    </main>
  );
};

export default Bug;
