import DarkModeToggle from '../components/DarkModeToggle';
import NavBar from '../components/NavBar';
import ContactInfo from '../components/ContactInfo';

export default function LexicalConstructs() {
  return (
    <main> 
      <DarkModeToggle />
      <NavBar /> 
      <header className="section-header"> 
        <h1>Lexical Constructs</h1>
        <h2>Welcome to my ad hoc blog!</h2>
      </header>
      <section className="section-content">
        <h3>Open Letters</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Essays</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Provocations</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
      </section>
      <ContactInfo /> 
    </main>
  )
}