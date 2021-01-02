// src\components\bug\bug-comment-edit.component.tsx

const BugCommentEdit: React.FC = () => {
  return (
    <form action="" className="comment-detailed_edit-comment-form">
      <label
        htmlFor="editComment"
        className="edit-comment-form_add-comment-label"
      >
        Add comment
      </label>
      <input type="text" className="edit-comment-form_input" id="editComment" />
      <div className="edit-comment-form_form-actions">
        <button className="form-actions_action-button">Submit</button>
        <button className="form-actions_action-button">X</button>
      </div>
    </form>
  );
};

export default BugCommentEdit;
