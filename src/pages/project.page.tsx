// src\pages\project.page.tsx

const Project = () => {
  return (
    <main className="main-content">
      {/* project info component start here */}
      <section className="main-content_project-info-bar">
        <div className="project-info-bar_upper-part-info">
          <h2>Project name here</h2>
          <button className="upper-part-info_project-options-toggler">
            <span>&gt;</span>
            <span>Project options</span>
          </button>
          {/* absolute project options container start */}
          <div className="upper-part-info_project-options-container">
            <button className="project-options-container_close-button">
              X
            </button>
            <div className="project-options-container_project-actions">
              <div className="project-actions_action-container">
                <button className="project-actions_action-button">
                  Rename project
                </button>
                <form className="project-actions_rename-project-form">
                  <label
                    htmlFor="projectName"
                    className="rename-project-form_label"
                  >
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
        <div className="project-info-bar_lower-part-info">
          <div className="lower-part-info_project-stats">
            <p className="project-stats_stat">
              <span>&gt;</span>
              <span>Total bugs:</span>
              <span>64</span>
            </p>
            <p className="project-stats_stat">
              <span>&gt;</span>
              <span>Completed:</span>
              <span>16%</span>
            </p>
          </div>
          <div className="lower-part-info_project-actions">
            <div className="project-actions_action-container">
              <button className="action-container_action-button">
                <span>&gt;</span>
                <span>Add bug</span>
              </button>
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
            </div>
            <div className="project-actions_action-container">
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
            <div className="project-actions_action-container">
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
      {/* project info component end here */}
      {/* project bugs start here */}

      <div className="main-content_bug-lists">
        {/* component that holds bug list */}

        <section className="bug-lists_bug-list-container">
          <h3>Pending status</h3>
          <ul className="bug-list-container_bug-briefs">
            <li className="bug-briefs_bug-brief">
              <h4>Bug name here</h4>
              <p>Just a short bug description, an excerpt really...</p>
              <p>
                <span>&gt;</span>
                <span>20 Dec 2020</span>
              </p>
            </li>
            <li className="bug-briefs_bug-brief">
              <h4>Bug name here</h4>
              <p>Just a short bug description, an excerpt really...</p>
              <p>
                <span>&gt;</span>
                <span>20 Dec 2020</span>
              </p>
            </li>
            <li className="bug-briefs_bug-brief">
              <h4>Bug name here</h4>
              <p>Just a short bug description, an excerpt really...</p>
              <p>
                <span>&gt;</span>
                <span>20 Dec 2020</span>
              </p>
            </li>
            <li className="bug-briefs_bug-brief">
              <h4>Bug name here</h4>
              <p>Just a short bug description, an excerpt really...</p>
              <p>
                <span>&gt;</span>
                <span>20 Dec 2020</span>
              </p>
            </li>
          </ul>
          <div className="bug-list-container_action-container">
            <button className="action-container_action-button">
              <span>&gt;</span>
              <span>Add bug</span>
            </button>
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
          </div>
        </section>
      </div>

      {/* project bugs end here */}
    </main>
  );
};

export default Project;
