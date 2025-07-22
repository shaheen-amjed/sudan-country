'use client'

import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import Link from 'next/link'

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isHidden, setIsHidden] = useState(false)
  const loaderRef = useRef(null)

  gsap.registerPlugin(SplitText)

  useGSAP(() => {
    const historyText = new SplitText('.history-text', {
      type: 'words',
    })

    gsap.from(historyText.words, {
      y: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
    })
  }, [])

  useEffect(() => {
    fetch('/api/images')
      .then((res) => res.json())
      .then((data) => {
        setImages(data)
      })
  }, [])

  useEffect(() => {
    if (images.length > 0) {
      const checkAssets = async () => {
        const wait = (ms: number) =>
          new Promise((res) => setTimeout(res, ms))

  
        await wait(100) 

        const imageElements = Array.from(
          document.querySelectorAll('img:not([loading="lazy"])')
        )
        const imagePromises = imageElements.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) resolve()
              else img.onload = () => resolve()
            })
        )

        const fontPromise = (document as any).fonts?.ready || Promise.resolve()

        await Promise.all([...imagePromises, fontPromise])

        setIsLoading(false)

        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => setIsHidden(true),
        })
      }

      checkAssets()
    }
  }, [images])

  return (
    <>
      {!isHidden && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-xl pointer-events-none"
        >
          Loading gallery...
        </div>
      )}

      <div className="galary-back">
        <div className="flex justify-center items-center mt-10">
          <h1 className="dif brdr history-text text-white text-4xl">
            Galary fo our history and Cluture
          </h1>
          <Link href='/'>Go back Home</Link>
        </div>
        <div className="flex lg:p-60 md:p-55 lg:gap-10 md:gap-10 flex-col flex-wrap justify-center items-center gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`image-${idx}`}
              className="w-[400] img sticky top-0 lg:w-[500] md:w-[500] h-auto"
         
            />
          ))}
        </div>
      </div>
    </>
  )
}
