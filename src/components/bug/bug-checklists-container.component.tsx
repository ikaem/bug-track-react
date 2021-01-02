// src\components\bug\bug-checklists-container.component.tsx

import BugChecklist from "./bug-checklist.component";

const BugChecklistsContainer: React.FC = () => {
  return (
    <div className="bug-detailed_bug-checklists-mapper">
      <ul className="bug-checklist-mapper_checklists">
        <BugChecklist />
      </ul>

      <button>
        <span>&gt;</span>
        <span>Add checklist</span>
      </button>
    </div>
  );
};

export default BugChecklistsContainer;
