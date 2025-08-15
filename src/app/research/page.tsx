"use client"

import NavBar from '../components/NavBar';
import ContactInfo from '../components/ContactInfo';

export default function Research() {
  return (
    <main> 
      <NavBar /> 
      <header className="section-header"> 
        <h1>Research</h1>
        <h2>I’m currently interested in the analysis of lexical change in users with regards to their interactions with AI and what that tells researchers about the potential unintended effects of AI once scaled to the broader audience. <br /> <br /> 
        Broadly, I’m interested in analyzing the output of complex systems to decode what is actually occurring internally and what that means for society, as well as how scientists can effectively message the problem and potential solutions to the public and policymakers alike.</h2>
      </header>
      <section className="section-content">
        <h3>Series A</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Series B</h3>
        <div className="projects-container">
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
          <div className="project-preview"></div>
        </div>
        <h3>Series C</h3>
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