// src\pages\project.page.tsx

import BugsColumnsLayout from "../components/project/bugs-columns-layout.component";
import InfoBar from "../components/shared/info-bar.component";
import Action from "../components/shared/action.component";
import AddBugForm from "../components/project/add-bug-form.component";

const Project = () => {
  return (
    <main className="main-content">
      <InfoBar>
        <Action>
          <AddBugForm />
        </Action>
        <Action>
          <AddBugForm />
        </Action>
        <Action>
          <AddBugForm />
        </Action>
      </InfoBar>
      <BugsColumnsLayout />
    </main>
  );
};

export default Project;
