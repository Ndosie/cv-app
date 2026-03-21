import "./styles/App.css";
import Education from "./components/Education";
import General from "./components/General";
import Experience from "./components/Experience";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    education: [{ school: "", title: "", date: "" }],
    experience: [
      {
        company: "",
        title: "",
        responsibilities: "",
        to_date: "",
        from_date: "",
      },
    ],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, index, section) => {
    const updated = [...formData[section]];
    updated[index][e.target.name] = e.target.value;

    setFormData({ ...formData, [section]: updated });
  };

  const addItem = (section) => {
    if (formData[section].length >= 5) {
      alert("Maximum 5 entries are allowed");
      return;
    }
    const newItem =
      section === "education"
        ? { school: "", title: "", date: "" }
        : {
            company: "",
            title: "",
            responsibilities: "",
            to_date: "",
            from_date: "",
          };

    setFormData({ ...formData, [section]: [...formData[section], newItem] });
  };

  const removeItem = (section, index) => {
    if (formData[section].length <= 1) {
      alert("At least 1 entry is required");
      return;
    }
    const updated = formData[section].filter((_, i) => i !== index);

    setFormData({ ...formData, [section]: updated });
  };

  return (
    <div className="container">
      <h1 className="App-header">CV Application</h1>
      <General formData={formData} handleChange={handleChange} />
      <Education
        formData={formData}
        handleArrayChange={handleArrayChange}
        addItem={addItem}
        removeItem={removeItem}
      />
      <Experience
        formData={formData}
        handleArrayChange={handleArrayChange}
        addItem={addItem}
        removeItem={removeItem}
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
