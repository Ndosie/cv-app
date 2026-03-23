function Education({
  formData,
  prevStep,
  nextStep,
  handleArrayChange,
  addItem,
  removeItem,
}) {
  return (
    <div className="education">
      <h2>Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={edu.school}
            onChange={(e) => handleArrayChange(e, index, "education")}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title of study"
            value={edu.title}
            onChange={(e) => handleArrayChange(e, index, "education")}
            required
          />
          <input
            type="text"
            name="date"
            placeholder="Date of study"
            onFocus={(e) => (e.target.type = "month")}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.type = "text";
              }
            }}
            value={edu.date}
            onChange={(e) => handleArrayChange(e, index, "education")}
            required
          />
          <button onClick={() => removeItem("education", index)}>
            - Remove Education
          </button>
        </div>
      ))}
      <button onClick={() => addItem("education")}>+ Add Education</button>
      <div className="buttons">
        <button onClick={() => prevStep()}>Back</button>
        <button onClick={() => nextStep()}>Next</button>
      </div>
    </div>
  );
}

export default Education;
