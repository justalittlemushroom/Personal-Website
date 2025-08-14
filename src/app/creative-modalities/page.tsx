import NavBar from '../components/NavBar';
import ContactInfo from '../components/ContactInfo';

export default function CreativeModalities() {
  return (
    <main> 
      <NavBar /> 
      <header className="section-header"> 
      <h1>Creative Modalities</h1>
      </header>
      <section className="section-content">
        <h3>Culinary Arts</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Textile Arts</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Visual Arts</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Precisions Arts</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Digital Arts</h3>
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