import "./styles/App.css";
import Education from "./components/Education";
import General from "./components/General";
import Experience from "./components/Experience";
import Review from "./components/Review";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
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
        from_date: "",
        to_date: "",
      },
    ],
  });

  const nextStep = () => {
    if (step === 1) {
      if (
        !formData.first_name ||
        !formData.last_name ||
        !formData.email ||
        !formData.phone
      ) {
        alert("All fields are required");
        return;
      }
    }

    if (step === 2) {
      if (
        !formData.education[0].school ||
        !formData.education[0].title ||
        !formData.education[0].date
      ) {
        alert("All fields are required");
        return;
      }
    }

    if (step === 3) {
      if (
        !formData.experience[0].company ||
        !formData.experience[0].title ||
        !formData.experience[0].responsibilities ||
        !formData.experience[0].from_date ||
        !formData.experience[0].to_date
      ) {
        alert("All fields are required");
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

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
      <div className="steps">
        <span className={step === 1 ? "current" : ""}></span>
        <span className={step === 2 ? "current" : ""}></span>
        <span className={step === 3 ? "current" : ""}></span>
        <span className={step === 4 ? "current" : ""}></span>
      </div>
      {step === 1 ? (
        <General
          formData={formData}
          nextStep={nextStep}
          handleChange={handleChange}
        />
      ) : step === 2 ? (
        <Education
          formData={formData}
          prevStep={prevStep}
          nextStep={nextStep}
          handleArrayChange={handleArrayChange}
          addItem={addItem}
          removeItem={removeItem}
        />
      ) : step === 3 ? (
        <Experience
          formData={formData}
          prevStep={prevStep}
          nextStep={nextStep}
          handleArrayChange={handleArrayChange}
          addItem={addItem}
          removeItem={removeItem}
        />
      ) : (
        <Review formData={formData} prevStep={prevStep} />
      )}
    </div>
  );
}

export default App;
