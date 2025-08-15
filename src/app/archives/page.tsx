"use client"

import NavBar from '../components/NavBar';
import ContactInfo from '../components/ContactInfo';

export default function Archives() {
  return (
    <main> 
      <NavBar /> 
      <header className="section-header"> 
      <h1>Archives</h1>
      <h2>In Progress</h2>
      </header>
      <ContactInfo />
    </main>
  )
}