"use client"

import { useState, useEffect } from 'react'

function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkMobile = () => {

        setIsMobile(window.innerWidth <= 768)
        setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const isDesktop = !isMobile && !isTablet;

  return {isMobile, isTablet, isDesktop};
}

export default useDeviceType;