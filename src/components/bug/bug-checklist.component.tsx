//src\components\bug\bug-checklist.component.tsx

const BugChecklist: React.FC = () => {
  return (
    <li className="mapper-checklists_checklist-container">
      <h4>
        <span>&gt;</span>
        <span>Some other checklist</span>
      </h4>
      {/* here need button for new input */}
      {/* click on the button will conditionally render a form to create new checkox input */}

      <div className="checklist-container_add-task-container">
        <button className="new-checkbox-container_action-button">
          <span>&gt;</span>
          <span>Add task</span>
        </button>
        <form className="add-checkbox-container_add-task-form">
          <label htmlFor="taskName" className="add-task-form_label">
            <input
              type="text"
              id="taskName"
              name="taskName"
              className="add-task-form_input"
            />
          </label>
          <button className="add-task-form_submit-button">Confirm</button>
        </form>
      </div>

      <form className="checklist-container_checklist-form">
        <ul className="checklist-form_check-items">
          <li className="check-items_check-item">
            <input type="checkbox" name="" id="someDynamicCheckboxId" />
            <label
              onClick={(e) => e.preventDefault()}
              htmlFor={"someDynamicCheckboxId"}
            >
              This label will be conditionally rendered when clicked on it
            </label>
            {/* this input below is conditially rendered when clicked on the label */}
            <div className="check-item_edit-check-item-label">
              <label htmlFor="someHtmlFor"></label>
              <input type="text" name="someNameForNow" id="someHtmlFor" />
              <button
                className="edit-check-item-label_save-edit-button"
                type="button"
              >
                Save
              </button>
              <button
                className="edit-check-item-label_cancel-edit-button"
                type="button"
              >
                X
              </button>
            </div>
          </li>
          <li className="check-items_check-item">
            <input type="checkbox" name="" id="someDynamicCheckboxId" />
            <label
              onClick={(e) => e.preventDefault()}
              htmlFor={"someDynamicCheckboxId"}
            >
              This label will be conditionally rendered when clicked on it
            </label>
            {/* this input below is conditially rendered when clicked on the label */}
            <div className="check-item_edit-check-item-label">
              <label htmlFor="someHtmlFor"></label>
              <input type="text" name="someNameForNow" id="someHtmlFor" />
              <button
                className="edit-check-item-label_save-edit-button"
                type="button"
              >
                Save
              </button>
              <button
                className="edit-check-item-label_cancel-edit-button"
                type="button"
              >
                X
              </button>
            </div>
          </li>
        </ul>
      </form>
    </li>
  );
};

export default BugChecklist;
