// src\components\shared\action.component.tsx

const Action: React.FC = ({ children }) => {
  return (
    <div className="project-actions_action-container">
      <button className="action-container_action-button">
        <span>&gt;</span>
        <span>Add bug</span>
      </button>
      {/* this below will be a child component passed to it later by the parent */}
      {/* TODO: this below will be a child component passed to it always */}
      {/* The form below is just provisional for now */}
      {/* <form className="action-container_add-bug-form">
        <label htmlFor="bugName" className="add-bug-form_label">
          <input
            type="text"
            id="bugName"
            name="bugName"
            className="add-bug-form_input"
          />
        </label>
        <label htmlFor="bugDescription" className="add-bug-form_label">
          <input
            type="text"
            id="bugDescription"
            name="bugDescription"
            className="add-bug-form_input"
          />
        </label>
        <button className="add-bug-form_submit-button">Confirm</button>
      </form> */}
      {children}
    </div>
  );
};

export default Action;
