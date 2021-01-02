// src\components\shared\apge-options.component.tsx

const PageOptions: React.FC = () => {
  return (
    <div className="upper-part-info_project-options-container">
      <button className="project-options-container_close-button">X</button>
      <div className="project-options-container_project-actions">
        <div className="project-actions_action-container">
          <button className="project-actions_action-button">
            Rename project
          </button>
          <form className="project-actions_rename-project-form">
            <label htmlFor="projectName" className="rename-project-form_label">
              <input
                type="text"
                id="projectName"
                name="projectName"
                className="rename-project-form_input"
              />
            </label>
            <button className="rename-project-form_submit-button">
              Confirm
            </button>
          </form>
        </div>

        <button className="project-actions_action-button">
          Rename project
        </button>
      </div>
      <div className="project-options-container_project-activity">
        <h4>
          <span>&gt;</span>
          <span>Project activity</span>
        </h4>
        <ul className="project-activity_activity-list">
          <li className="activity-list_activity-brief">
            <div className="activity-brief_user-avatar-container">
              <img src="..." alt="" />
            </div>
            <div className="activity-brief_activity-actual">
              <span className="activity-actual_username">User</span>
              <span className="activity-actual_action">added</span>
              <span className="activity-actual_action-object">a comment</span>
              <span className="activity-actual_action-object-holder">
                to comments
              </span>
              <span className="activity-actual_action-object-holder">
                of This Some Bug Name
              </span>
            </div>
            <span className="activity-brief_date">23 Dec 2020, 15:30</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageOptions;
