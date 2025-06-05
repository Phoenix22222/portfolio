'use client'

import { useRef, useState, useEffect } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

export default function VantaBg () {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)
  const [isBlurred, setIsBlurred] = useState(false)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color: 0x6F6F6F,
          backgroundColor: 0x1B1B1B
        })
      )
    }
    return () => vantaEffect && vantaEffect.destroy()
  }, [vantaEffect])

  useEffect(() => {
    const onScroll = () => {
      setIsBlurred(window.scrollY >= 250)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div ref={vantaRef} className="fixed inset-0 -z-50" />
      <div
        className={`
          fixed inset-0 -z-40 pointer-events-none
          transition-opacity duration-1000
          ${isBlurred ? 'opacity-100' : 'opacity-0'}
          backdrop-blur-sm bg-black/30
        `}
      />
    </>
  )
}
