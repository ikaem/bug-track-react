// src\components\project\bugs-columns-layout.component.tsx

import BugsColumn from "./bugs-column.component";
import Action from "../shared/action.component";
import AddBugForm from "./add-bug-form.component";

const BugsColumnsLayout: React.FC = () => {
  return (
    <div>
      <BugsColumn>
        <Action>
          <AddBugForm />
        </Action>
      </BugsColumn>
      <BugsColumn />
      <BugsColumn />
    </div>
  );
};

export default BugsColumnsLayout;
