'use client'

import React, { useEffect, useRef, useState } from 'react'
import Home from './components/Home'
import Lenis from '@studio-freight/lenis'
import Modern from './components/Modern'
import Footer from './components/Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const loaderRef = useRef(null)

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const waitForAllAssets = async () => {
      const images = Array.from(document.images)
      const imagePromises = images.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) resolve()
            else img.onload = () => resolve()
          })
      )

      const videoElements = Array.from(document.querySelectorAll('video'))
      const videoPromises = videoElements.map(
        (video) =>
          new Promise<void>((resolve) => {
            if (video.readyState >= 3) resolve()
            else video.oncanplaythrough = () => resolve()
          })
      )

      const fontPromise = (document as any).fonts?.ready || Promise.resolve()

      await Promise.all([...imagePromises, ...videoPromises, fontPromise])
      setIsLoading(false)

      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => setIsHidden(true),
      })
    }

    waitForAllAssets()
  }, [])

  return (
    <main>
      {!isHidden && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-xl pointer-events-none"
        >
          Loading...
        </div>
      )}

      <Home />
      <Modern />
      <Footer />
    </main>
  )
}

export default Page
