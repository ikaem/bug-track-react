// src\components\bug\bug-comments-container.component.tsx

import ProfileAvatar from "../shared/profile-avatar.component";
import BugCommentContainer from "./bug-comment-container.component";
import BugCommentEdit from "./bug-comment-edit.component";

const BugCommentsContainer: React.FC = () => {
  return (
    <div className="but-detailed_bug-comments-container">
      <h4>
        <span>&gt;</span>
        <span>Comments</span>
      </h4>

      <div className="bug-comments-container_new-comment-container">
        <ProfileAvatar />
        <BugCommentEdit />
      </div>

      <ul className="bug-comments-container_comments-mapper">
        <BugCommentContainer />
      </ul>
    </div>
  );
};

export default BugCommentsContainer;
