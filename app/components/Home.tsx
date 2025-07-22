'use client'

import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Link from 'next/link'


const Home = () => {



  gsap.registerPlugin(ScrollTrigger, SplitText)

  const isIt = useMediaQuery({ maxWidth: 600 })

  const scale = isIt ? '1' : '1.7'
  const maskSize = isIt ? '400%' : '400%'

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.mask-container',
        scrub: 1.5,
        start: 'top 20%',
        end: '+=1200',
        pin: true,
      },
    })

    tl
      .to('.arrow', {
        opacity: 0,
        duration: 1
      })
      .to('.fade-this-out', {
        opacity: 0,
        duration: 1,
      })
      .to('.masked-image', {
        scale,
        maskPosition: 'center',
        maskSize,
        duration: 1,
        borderRadius: 10,
        ease: 'power1.inOut',
      })
      .to('.fade-this-in', {
        opacity: 1,
        duration: 1,
      })
      .fromTo('.navBar', {
        opacity: 0,
        y: -50,
        
      }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out'
      })
      
      gsap.from('.arrow', {
        y: 30,
        repeat: -1,
        yoyo: true
      })
  }, [])

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 1024 })


  return (
    <>
      

      {/* Button to open/close sidebar */}
{isMobile && (
  <button
    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    className="z-50 fixed top-5 left-5 bg-white text-black p-2 rounded shadow-md"
  >
    ☰
  </button>
)}

{/* Sidebar for mobile */}
{isMobile && isSidebarOpen && (
  <div className="fixed top-0 left-0 w-3/4 h-full bg-none backdrop-blur-md bg-opacity-90 text-white p-5 z-40 flex flex-col gap-5">
    <button
      onClick={() => setIsSidebarOpen(false)}
      className="self-end text-white text-2xl"
    >
      ✕
    </button>
    <Link href={`/`} className="text-xl">Sudan</Link>
    <Link href={`#modern`} className='dif'>Modern</Link>
    <Link href={`#cluture`} className='dif'>Culture & history</Link>
    <Link href={`#icons`} className='dif'>Icons</Link>
    <Link href={`#identity`} className='dif'>Identity</Link>
    <Link href={`#message`} className='dif' >Message</Link>
  </div>
)}

{/* Top NavBar for desktop only */}
{!isMobile && (
  <div className="px-5 bg-none backdrop-blur-md sticky top-0 opacity-0 text-white navBar flex gap-10 flex-row flex-wrap justify-center items-center z-10">
    <Link className="mr-auto lg:text-7xl md:text-5xl sm:text-4xl text-4xl" href={`/`}>Sudan</Link>
    <Link href={`#modern`} className='dif'>Modern</Link>
    <Link href={`#culture`} className='dif'>Culture & history</Link>
    <Link href={`#icons`} className='dif'>Icons</Link>
    <Link href={`#identity`} className='dif'>Identity</Link>
    <Link href={`#message`} className='dif'>Message</Link>
  </div>
)}


      {/* Main Content */}
      <h1 color='white' className='text-center dif text-white'> - Scroll Down - </h1>
      <div className=" p-10 mask-container flex flex-col flex-wrap lg:justify-center md:justify-center sm:justify-start justify-start gap-10 items-center">
        <div className="mb-20"></div>

        <div className="masked-content flex justify-center items-center">
          <img className="masked-image w-[400px] mt-10 absolute" src="/sudan-planet.jpg" alt="sudan img" />
        </div>

        <div className="justify-center items-center fade-this-out">
          <h1 className="lg:text-9xl md:text-7xl sm:text-4xl text-2xl fade fancy-text">Sudan Country</h1>
        </div>

        <div className="fade-this-in mt-10 fancy-text opacity-0 text-center">
          <h1 id="down">The Sudan You Never Knew</h1>
        </div>

        <div className="fade-first arrow opacity-0 flex justify-center items-center">
          <img
            src="https://raw.githubusercontent.com/shaheen-amjed/shaheen-cocktails-project/refs/heads/main/public/images/arrow.png"
            alt="arrow"
          />
        </div>
      </div>
    </>
  )
}

export default Home
