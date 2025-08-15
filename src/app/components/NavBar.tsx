"use client"

import Link from "next/link";
import Image from "next/image";
import { Home, Menu } from 'lucide-react'
import useDeviceType from '../hooks/useDeviceType';

export default function NavBar() {
  const { isMobile, isTablet } = useDeviceType();
  const homeIconSize = isTablet ? 32 : 48;
  const menuIconSize = window.innerWidth > 600 ? 44 : 24;

  return (
    (isMobile) ? <Link href="/menu" className="menu-button"> <Menu size={menuIconSize}/> </Link> : 
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
            <Link href="/" className="home-button"> <Home size={homeIconSize}/> </Link>
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
        </nav>
    </div>
  )
}