// src\pages\bug.page.tsx

const Bug: React.FC = () => {
  return (
    <main className="main-content_bug-info-bar">
      {/* bug info component start here */}
      <section className="main-content_bug-info-bar">
        <div className="bug-info-bar_upper-part-info">
          <h2>Bug name here</h2>
          <button className="upper-part-info_bug-options-toggler">
            <span>&gt;</span>
            <span>Bug options</span>
          </button>
          {/* absolute bug options container start */}
          <div className="upper-part-info_bug-options-container">
            <button className="bug-options-container_close-button">X</button>
            <div className="bug-options-container_bug-actions">
              <div className="bug-actions_action-container">
                <button className="bug-actions_action-button">
                  Rename bug
                </button>
                <form className="bug-actions_rename-bug-form">
                  <label htmlFor="bugName" className="rename-bug-form_label">
                    <input
                      type="text"
                      id="bugName"
                      name="bugName"
                      className="rename-bug-form_input"
                    />
                  </label>
                  <button className="rename-bug-form_submit-button">
                    Confirm
                  </button>
                </form>
              </div>

              <button className="bug-actions_action-button">Archive bug</button>
            </div>
            <div className="bug-options-container_bug-activity">
              <h4>
                <span>&gt;</span>
                <span>Bug activity</span>
              </h4>
              <ul className="bug-activity_activity-list">
                <li className="activity-list_activity-brief">
                  <div className="activity-brief_user-avatar-container">
                    <img src="..." alt="" />
                  </div>
                  <div className="activity-brief_activity-actual">
                    <span className="activity-actual_username">User</span>
                    <span className="activity-actual_action">added</span>
                    <span className="activity-actual_action-object">
                      a comment
                    </span>
                    <span className="activity-actual_action-object-holder">
                      to comments
                    </span>
                    <span className="activity-actual_action-object-holder">
                      of This Some Bug Name
                    </span>
                  </div>
                  <span className="activity-brief_date">
                    23 Dec 2020, 15:30
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* absolute project options container end */}
        </div>
        <div className="bug-info-bar_lower-part-info">
          <div className="lower-part-info_bug-stats">
            <p className="bug-stats_stat">
              <span>&gt;</span>
              <span>Project:</span>
              <span>Some name</span>
            </p>
            <p className="bug-stats_stat">
              <span>&gt;</span>
              <span>Bug status:</span>
              <span>Pending</span>
            </p>
          </div>
          <div className="lower-part-info_project-actions">
            <div className="bug-actions_action-container">
              <button className="action-container_action-button">
                <span>&gt;</span>
                <span>Members</span>
              </button>
              <ul className="action-container_members-list">
                <li className="members-list_member-item">
                  <div className="member-item_avatar-container">
                    <img src="..." alt="" />
                  </div>
                  <span className="member-item_member-name">John Doe</span>
                  <button className="member-item_remove-button">X</button>
                </li>
                <li className="members-list_member-item">
                  <div className="member-item_avatar-container">
                    <img src="..." alt="" />
                  </div>
                  <span className="member-item_member-name">John Doe</span>
                  <button className="member-item_remove-button">X</button>
                </li>
                <li className="members-list_member-item">
                  <div className="member-item_avatar-container">
                    <img src="..." alt="" />
                  </div>
                  <span className="member-item_member-name">John Doe</span>
                  <button className="member-item_remove-button">X</button>
                </li>
              </ul>
            </div>
            <div className="bug-actions_action-container">
              <button className="action-container_action-button">
                <span>&gt;</span>
                <span>Add member</span>
              </button>
              <form className="action-container_add-member-form">
                <label htmlFor="memberName" className="add-member-form_label">
                  <input
                    type="text"
                    id="memberName"
                    name="memberName"
                    className="add-member-form_input"
                  />
                </label>
                <button className="add-member-form_submit-button">
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* bug info component end here */}
      <div className="main-content_bug-detailed">
        <div className="bug-detailed_bug-description">
          <h4 className="bug-description_label">
            <span>&gt;</span>
            <span>Description</span>
          </h4>
          <p className="bug-description_description-actual">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            cupiditate maiores enim ipsa, voluptas esse tempora fugit et beatae
            debitis dignissimos ab officia eveniet rerum. Eum dolor magnam quos
            non.
          </p>
          <button className="bug-description_start-edit-button">Edit</button>
          <form className="bug-description_description-edit-form">
            <label htmlFor="description">Add bug description:</label>
            <textarea name="description" id="description" rows={10}></textarea>
            <button className="description-edit-form_submit-edit-button">
              Confirm
            </button>
          </form>
        </div>
        {/* checklist lists component start here */}
        <div className="bug-detailed_bug-checklists-mapper">
          <ul className="bug-checklist-mapper_checklists">
            <li className="mapper-checklists_checklist-container">
              <h4>
                <span>&gt;</span>
                <span>Some other checklist</span>
              </h4>
              <form className="checklist-container_checklist-form">
                <ul className="checklist-form_check-items">
                  <li className="check-items_check-item">
                    <input type="checkbox" name="" id="someDynamicCheckboxId" />
                    <label
                      onClick={(e) => e.preventDefault()}
                      htmlFor={"someDynamicCheckboxId"}
                    >
                      This label will be conditionally rendered when clicked on
                      it
                    </label>
                    {/* this input below is conditially rendered when clicked on the label */}
                    <div className="check-item_edit-check-item-label">
                      <label htmlFor="someHtmlFor"></label>
                      <input
                        type="text"
                        name="someNameForNow"
                        id="someHtmlFor"
                      />
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
                      This label will be conditionally rendered when clicked on
                      it
                    </label>
                    {/* this input below is conditially rendered when clicked on the label */}
                    <div className="check-item_edit-check-item-label">
                      <label htmlFor="someHtmlFor"></label>
                      <input
                        type="text"
                        name="someNameForNow"
                        id="someHtmlFor"
                      />
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
            <li className="mapper-checklists_checklist-container">
              <h4>
                <span>&gt;</span>
                <span>Some checklist</span>
              </h4>
              <form className="checklist-container_checklist-form">
                <ul className="checklist-form_check-items">
                  <li className="check-items_check-item">
                    <input type="checkbox" name="" id="someDynamicCheckboxId" />
                    <label
                      onClick={(e) => e.preventDefault()}
                      htmlFor={"someDynamicCheckboxId"}
                    >
                      This label will be conditionally rendered when clicked on
                      it
                    </label>
                    {/* this input below is conditially rendered when clicked on the label */}
                    <div className="check-item_edit-check-item-label">
                      <label htmlFor="someHtmlFor"></label>
                      <input
                        type="text"
                        name="someNameForNow"
                        id="someHtmlFor"
                      />
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
          </ul>

          <button>
            <span>&gt;</span>
            <span>Add checklist</span>
          </button>
        </div>

        {/* checklist lists component end here */}
      </div>
    </main>
  );
};

export default Bug;
