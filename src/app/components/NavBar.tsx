import Link from "next/link";
import { Home } from 'lucide-react'

export default function NavBar() {
  return (
    <nav className="nav-bar">
        <Link href="/" className="home-button"> <Home size={48} /> </Link>
        <div className="nav-section">
            <header className="nav-section-header">Personal Journey</header>
            <Link href="/about-me" className="nav-link">About Me</Link>
            <Link href="/lexical-constructs" className="nav-link">Lexical Constructs</Link>
        </div>
        <div className="nav-section">
            <header className="nav-section-header">Intellectual Work</header>
            <Link href="/research" className="nav-link">Research</Link>
            <Link href="/curiosity-cabinet" className="nav-link">Curiosity Cabinet</Link>
        </div>
        <div className="nav-section">
            <header className="nav-section-header">Cultural Work</header>
            <Link href="/travel-log" className="nav-link">Travel Log</Link>
            <Link href="/creativity-modalities" className="nav-link">Creative Modalities</Link>
        </div>
        <div className="nav-section">
            <header className="nav-section-header">Meta</header>
            <Link href="/behind-the-blog" className="nav-link">Behind the Blog</Link>
            <Link href="/archives" className="nav-link">Archives</Link>
        </div>
    </nav>
  )
}