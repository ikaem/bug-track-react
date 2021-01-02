// src\components\bug\bug-comment.component.tsx

const BugComment: React.FC = () => {
  return (
    <div className="comment-item_comment-detailed">
      <span className="comment-detailed_author">Username</span>
      <span className="comment-detailed_date-time">22 Mar 2020, 15:30</span>
      <p className="comment-detailed_date-time">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        architecto veniam enim sequi deleniti non alias animi explicabo totam.
      </p>
      <div className="comment-detailed_comment-actions">
        <button className="comment-actions_action-button">Edit</button>
        <button className="comment-actions_action-button">Delete</button>
      </div>
    </div>
  );
};

export default BugComment;
