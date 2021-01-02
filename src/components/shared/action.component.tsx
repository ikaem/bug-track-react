// src\components\shared\action.component.tsx

import styled from "styled-components";

const Action: React.FC = ({ children }) => {
  return (
    <ActionStyled className="project-actions_action-container">
      <button className="action-container_action-button">
        <span>&gt;&gt;</span>
        <span className="desktop-size-label">Add bug</span>
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
      <div className="action-container-action-actual-wrapper">{children}</div>
    </ActionStyled>
  );
};

export default Action;

const ActionStyled = styled.div`
  padding: 0.25rem;
  /* border-right: 1px solid gray; */
  margin-right: 1rem;

  /* temp background color */
  background-color: orange;
  border-radius: 4px;

  .desktop-size-label {
    display: none;
  }

  /* TODO: temporary hide actual action - later to be toggled on an off, and position absolutely */
  .action-container-action-actual-wrapper {
    display: none;
  }
`;
