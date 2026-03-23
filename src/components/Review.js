import { usePDF } from "react-to-pdf";

function Review({ formData, prevStep }) {
  const {toPDF, targetRef} = usePDF({ filename: "CV.pdf" });

  return (
    <>
      <h2>Review</h2>
      <div className="review" ref={targetRef}>
        <h2>Curriculum Vitae</h2>
        <p>
          Name: {formData.first_name} {formData.last_name}
        </p>
        <h3>Contacts</h3>
        <p>Email: {formData.email}</p>
        <p>Phone Number: {formData.phone}</p>
        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <p>School Name: {edu.school}</p>
            <p>Title: {edu.title}</p>
            <p>Year: {edu.date}</p>
          </div>
        ))}
        <h3>Experience</h3>
        {formData.experience.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.company}</p>
            <p>Position: {exp.title}</p>
            <p>
              From {exp.from_date} to {exp.to_date}
            </p>
            <p>Responsibilities: {exp.responsibilities}</p>
          </div>
        ))}
      </div>
      <button onClick={() => prevStep()}>Back</button>
      <button onClick={() => toPDF()}>Download</button>
    </>
  );
}

export default Review;
