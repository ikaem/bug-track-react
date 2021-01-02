// src\components\project\bug-brief.component.tsx

const BugBrief: React.FC = () => {
  return (
    <li className="bug-briefs_bug-brief">
      <h4>Bug name here</h4>
      <p>Just a short bug description, an excerpt really...</p>
      <p>
        <span>&gt;</span>
        <span>20 Dec 2020</span>
      </p>
    </li>
  );
};

export default BugBrief;
