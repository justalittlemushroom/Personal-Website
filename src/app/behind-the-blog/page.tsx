import NavBar from '../components/NavBar';
import ContactInfo from '../components/ContactInfo';

export default function BehindTheBlog() {
  return (
    <main> 
      <NavBar /> 
      <header className="section-header"> 
      <h1>Behind the Blog</h1>
      <h2>In Progress</h2>
      </header>
      <ContactInfo />
    </main>
  )
}