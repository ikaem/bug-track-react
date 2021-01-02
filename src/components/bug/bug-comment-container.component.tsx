// src\components\bug\bug-comment-container.component.tsx

import ProfileAvatar from "../shared/profile-avatar.component";
import BugCommentEdit from "./bug-comment-edit.component";
import BugComment from "./bug-comment.component";

const BugCommentContainer: React.FC = () => {
  return (
    <li className="comments-mapper_comment-item">
      <ProfileAvatar />
      <BugComment />
      <BugCommentEdit />
    </li>
  );
};

export default BugCommentContainer;
