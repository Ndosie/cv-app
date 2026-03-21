function Experience({ formData, prevStep, nextStep, handleArrayChange, addItem, removeItem }) {
  return (
    <div className="experience">
      <h2>Experience</h2>
      {formData.experience.map((exp, index) => (
        <div key={index}>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => handleArrayChange(e, index, "experience")}
          />
          <input
            type="text"
            name="title"
            placeholder="Position Title"
            value={exp.title}
            onChange={(e) => handleArrayChange(e, index, "experience")}
          />
          <textarea
            name="responsibilities"
            placeholder="Main Responsibilities"
            rows={10}
            value={exp.responsibilities}
            onChange={(e) => handleArrayChange(e, index, "experience")}
          ></textarea>
          <input
            type="text"
            name="from_date"
            placeholder="From Date"
            onFocus={(e) => (e.target.type = "month")}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.type = "text";
              }
            }}
            value={exp.from_date}
            onChange={(e) => handleArrayChange(e, index, "experience")}
          />
          <input
            type="text"
            name="to_date"
            placeholder="To date"
            onFocus={(e) => (e.target.type = "month")}
            onBlur={(e) => {
              if (!e.target.value) {
                e.target.type = "text";
              }
            }}
            value={exp.to_date}
            onChange={(e) => handleArrayChange(e, index, "experience")}
          />
          <button onClick={() => removeItem("experience", index)}>
            - Remove Experience
          </button>
        </div>
      ))}
      <button onClick={() => addItem("experience")}>+ Add Experience</button>
      <div className="buttons">
        <button onClick={() => prevStep()}>Back</button>
        <button onClick={() => nextStep()}>Next</button>
      </div>
    </div>
  );
}

export default Experience;
