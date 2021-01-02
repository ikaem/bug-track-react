// src\components\bug\bug-description.component.tsx

const BugDescription: React.FC = () => {
  return (
    <div className="bug-detailed_bug-description">
      <h4 className="bug-description_label">
        <span>&gt;</span>
        <span>Description</span>
      </h4>
      <p className="bug-description_description-actual">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        cupiditate maiores enim ipsa, voluptas esse tempora fugit et beatae
        debitis dignissimos ab officia eveniet rerum. Eum dolor magnam quos non.
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
  );
};

export default BugDescription;
