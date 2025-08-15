"use client"

import NavBar from '../components/NavBar';
import ContactInfo from '../components/ContactInfo';

export default function CuriosityCabinet() {
  return (
    <main> 
      <NavBar /> 
      <header className="section-header"> 
        <h1>Curiosity Cabinet</h1>
      </header>
      <section className="section-content">
        <h3>Automotive & Aerodynamic Design</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Urban Design & Infrastructure </h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>History & Art</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Mythologies</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Law</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Medicine</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>True Crime</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Corporations</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Cybersecurity</h3>
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