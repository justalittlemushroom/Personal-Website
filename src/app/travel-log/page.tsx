"use client"

import NavBar from '../components/NavBar';
import ContactInfo from '../components/ContactInfo';

export default function TravelLog() {
  return (
    <main> 
      <NavBar /> 
      <header className="section-header"> 
      <h1>Travel Log</h1>
      <h2>In Progress</h2>
      </header>
      <section className="section-content">
        <h3>Japan</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Seattle</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Eastern Canada</h3>
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