"use client"

import Link from "next/link";
import Image from "next/image";
import { Home, X } from 'lucide-react'
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();
  
  return (
    <div className="nav-container">
        <nav className="nav-bar">
            <div className="corner-ornament top-right">
                <Image 
                    src="/victorian-ornamental-corner.PNG" 
                    alt="" 
                    width={300}
                    height={150}/>
            </div>
            <div className="corner-ornament bottom-left">
                <Image 
                    src="/victorian-ornamental-corner.PNG" 
                    alt="" 
                    width={300}
                    height={150}/>
            </div>
            <Link href="/" className="x-button" onClick={() => router.back()}> <X size={24}/> </Link>
            <Link href="/" className="home-button"> <Home size={32}/> </Link>
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
                <Link href="/creative-modalities" className="nav-link">Creative Modalities</Link>
            </div>
            <div className="nav-section">
                <header className="nav-section-header">Meta</header>
                <Link href="/behind-the-blog" className="nav-link">Behind the Blog</Link>
                <Link href="/archives" className="nav-link">Archives</Link>
            </div>
            <div className="nav-section">
                <header className="nav-section-header">Contact Me</header>
                <p>
                Email: <a href="mailto:wan.lis@northeastern.edu">wan.lis@northeastern.edu</a><br />
                Discord: justalittlemushroominthecorner<br />
                GitHub: <a href="https://github.com/justalittlemushroom" target="_blank" rel="noopener noreferrer">github.com/justalittlemushroom</a><br />
                LinkedIn: <a href="https://linkedin.com/in/lisa-wan" target="_blank" rel="noopener noreferrer">linkedin.com/in/lisa-wan</a><br />
                </p>
            </div>
        </nav>
    </div>
  )
}