// src\components\project\bugs-column.component.tsx

import BugBrief from "./bug-brief.component";

const BugsColumn: React.FC = ({ children }) => {
  return (
    <section className="bug-lists_bug-list-container">
      <h3>Pending status</h3>
      <ul className="bug-list-container_bug-briefs">
        <BugBrief />
      </ul>
      {children}
    </section>
  );
};

export default BugsColumn;
