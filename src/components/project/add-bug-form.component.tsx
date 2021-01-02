// src\components\project\add-bug-form.component.tsx

const AddBugForm: React.FC = () => {
  return (
    <form className="action-container_add-bug-form">
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
    </form>
  );
};

export default AddBugForm;
