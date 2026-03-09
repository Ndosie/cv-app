import "./styles/App.css";
import Education from "./components/Education";
import General from "./components/General";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="container">
      <h1 className="App-header">CV Application</h1>
      <h2>General Details</h2>
      <General />
      <h2>Education</h2>
      <section className="education">
        <Education />
      </section>
      <button> + Add Education</button>
      <h2>Experience</h2>
      <section className="experience">
        <Experience />
      </section>
      <button> + Add Experience</button>
      <button>Submit</button>
    </div>
  );
}

export default App;
