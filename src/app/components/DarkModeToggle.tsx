"use client"

import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react';
import useDeviceType from '../hooks/useDeviceType';
import { usePathname } from 'next/navigation';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const { isMobile } = useDeviceType();
  const isMenuPage = usePathname() === '/menu';

  return (
    (isMobile && !isMenuPage) ? null :
    <button onClick={toggleTheme} className="theme-toggle">{isDark ? <Sun size={32}/> : <Moon size={32}/>}</button>
  )
}