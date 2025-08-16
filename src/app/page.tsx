import DarkModeToggle from './components/DarkModeToggle';
import NavBar from './components/NavBar';
import ContactInfo from './components/ContactInfo';

export default function Home() {
  return (
    <main> 
      <DarkModeToggle />
      <NavBar /> 
      <header className="section-header"> 
      <h1>Hi! I&apos;m<br />Lisa Wan</h1>
      <h2>The best innovation emerges not in the heart of silos, but rather where their borders fray and disciplines forget their names.</h2>
      </header>
      <section className="section-content">
        <h3>Featured Technical Projects</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Featured Research Projects</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Featured Miscellaneous Projects</h3>
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