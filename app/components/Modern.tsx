'use client'

import React, { useLayoutEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import rank from './rank'
import sudan from './sudan'
import images from './images'

gsap.registerPlugin(ScrollTrigger, SplitText)

const Modern = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 })
  const start = isMobile ? 'top center' : 'top center'

  useGSAP(() => {
    const ctx = gsap.context(() => {


      

        
  
      const splitH1 = new SplitText('#the-sudan', {
        type: 'words'
      })
      const splitP = new SplitText('.the-par', {
        type: 'lines'
      })

      const sp1 = new SplitText('.brdr1', {
            type: 'words'
      })

      const we = new SplitText('.we', {
        type: 'words'
      })

      const iconsHeader = new SplitText('.icons-header', {
        type: 'words'
      })

      const messageH = new SplitText('.message-header', {
        type: 'words'
      })

      const messgaep = new SplitText('.message-pr', {
        type: 'lines'
      })


      gsap.from(messageH.words, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      })

      gsap.fromTo(messgaep.lines, {
        opacity: 0.5
      }, {
        opacity: 10,
        duration: 2,
        scrollTrigger: {
          trigger: '.message-pr',
          scrub: 0.9,
        },
        stagger: 0.1
      })


      const iconsTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.icons',
          start,
          end: '+=200'
        }
      })

      iconsTl
      .from(iconsHeader.words, {
        y: -30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      })
      .from('.icons-things', {
        y: 30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      })


      

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#haha',
          start,
          end: '+=200',
        }
      })

      const imgtl = gsap.timeline({
        scrollTrigger: {
          trigger: '.we-are',
          start,
          end: '+=200',
        }
      })

    


      imgtl
      .from(we.words, {
        y: -30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      })
      .from('.hi', {
        opacity: 0,
        y: 30,
        duration: 0.3,
        stagger: 0.1
      })
      .from('.btn-con', {
        opacity: 0,
        y: 30,
        duration: 0.3,
        stagger: 0.1
      })

      

      tl
      .from(splitH1.words, {
        y: -30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      })
      .from(splitP.lines, {
        y: 30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      })
      .from('.btn', {
        opacity: 0,
        y: 30,
        duration: 0.3
      })
      .from('.btn', {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1
      })

      gsap.from(sp1.words, {
        scrollTrigger: {
            trigger: '.rank',
            start,
            end: '+=200'
        },
        y: -30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      })
      
      gsap.from('.brdr2', {
        scrollTrigger: {
            trigger: '.rank',
            start,
            end: '+=200'
        },
        y: -30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1
      })



    })

    return () => ctx.revert()
  }, [])


  return (
    <>
    <div id='modern' className='bg-[#1B1B1B] shadow backdrop-blur-2xl rounded-xl p-10 text-white'>
      <div id='haha' className='flex flex-wrap flex-row justify-start'>
        <h1 id='the-sudan' className='opacity-200 brdr lg:text-7xl md:text-5xl sm:text-4xl text-3xl'>
          The Sudan You Never Knew
        </h1>
      </div>
      <br />
      <br />
      <p className='the-par lg:text-3xl'>
       " Most people in the world see African people as if they were cave people from a million years ago — with no history, no knowledge, and no culture. Not all of Africa is seen this way, but specifically Sudan. When people hear 'Sudan,' they blindly assume it’s just another poor country in Africa. They know nothing about us, and they don’t even try to learn. Instead, they make movies that show us as they want the world to see us. Movies like The Good Lie are, in fact, a very good lie — portraying us as if we’ve never seen a phone, as if we’re stuck in the stone age. But we are far more than what they think. We have deep history, powerful cultures, and untold stories. The sad truth? No one in the world wants to know — but we know who we are. Through this website, I will do my best to break these harmful stereotypes and share the truth about us. If you’re interested — keep scrolling. You’ll discover what the world has ignored for far too long. "
      </p>
      <br />
      <div className='flex justify-start text-white text-xl text-left'>
        <Link className='bg-white btn text-black p-2 shadow-xl rounded-xl' href={`https://www.google.com/search?sca_esv=52ec33392580eac8&sxsrf=AE3TifPVXV1f-QUW7ePLAUDHhtImfrBoWA:1753090837581&q=sudanese+modern+places&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIemkjk18Cn72Gp24fGkjjh6wQFVCbKXb4P6swJy4x5wjmX1QMyrc1m1XKN58kg7ZpCMlU_dqIFIZOO1eISQn6053J-U_An8quKdshViPW5q1G1H2lc6CUGUObyRStzcnCgcUIpE8nA5YopzEOeMKyHibpX5wBj6v4Dnn9L6nfjyAzQC1Ggg&sa=X&ved=2ahUKEwjEz4al1M2OAxWOZ0EAHWxEOUgQtKgLKAF6BAgSEAE&biw=1366&bih=647&dpr=1`} target='__blank'>Wanna see some modern places?</Link>
      </div>
    </div>
    <br />

    <div id='culture' className="rank bg-[#1B1B1B] backdrop-blur-2xl shadow rounded-xl flex flex-col flex-wrap justify-start p-10 text-white">
        <div className='flex flex-wrap flex-row justify-start' >
            <h1 className='opacity-200 brdr1 brdr lg:text-7xl md:text-5xl sm:text-4xl text-2xl'>A History Older Than Your Maps</h1>
        </div>
        <br />
        <div className=" dif ranking lg:text-3xl md:text-xl">
            {rank.map((rankk) => (
                <>
                <ul className='brdr2' key={rankk.id}>
                    <li>Rank: {rankk.ranking}</li>
                    <li>Sudan: {rankk.sudan}</li>
                    <br />
                </ul>
                </>
            ))}
        </div>
    </div>

    <br />
    

    <div id='icons' className="icons bg-[#1B1B1B] backdrop-blur-2xl shadow rounded-xl flex flex-col flex-wrap justify-start p-10 text-white">
        <div className='flex flex-wrap flex-row justify-start' >
            <h1 className='opacity-200 icons-header  brdr lg:text-7xl md:text-5xl sm:text-4xl text-2xl'>Sudanese Who Changed the World</h1>
        </div>
        <br />
        
        <div className="ranking dif lg:text-3xl md:text-xl">
            {sudan.map((sudany) => (
                <>
                <ul className='icons-things' key={sudany.id}>
                    <li>name: {sudany.name}</li>
                    <li>achievement: {sudany.achievement}</li>
                    <br />
                </ul>
                </>
            ))}
        </div>
    </div>



    <br />
    

    <div id='identity' className="we-are bg-[#1B1B1B] backdrop-blur-2xl shadow rounded-xl flex flex-col flex-wrap justify-start p-10 text-white">
        <div className='flex flex-wrap flex-row justify-center' >
            <h1 className='opacity-200 brdr shadow lg:text-7xl text-center we md:text-5xl sm:text-4xl text-2xl'>We Are More Than One Thing</h1>
        </div>
        <br />
        <div className="we-are2 flex flex-wrap gap-4 justify-center">
        {
          images.map((img) => (
            <div key={img.alt} className="w-[150px] h-[150px] hi overflow-hidden rounded-lg shadow-xl">
              <img 
                src={img.path} 
                alt={img.alt} 
                className="w-full img h-full object-cover"
              />
            </div>
          ))
        }
      </div>
      <div className='flex justify-center btn-con items-center mt-10'>
        <Link className='bg-white btn text-black p-2 shadow-xl rounded-xl dif' target='__blank' href={'/galary'}>Take a look here !</Link>
      </div>

    </div>


    <br />

    <div id='message' className='bg-[#1B1B1B] shadow backdrop-blur-2xl rounded-xl p-10 text-white'>
      <div className='flex flex-wrap flex-row justify-start'>
        <h1 id='message-header' className='opacity-200 brdr lg:text-7xl md:text-5xl sm:text-4xl text-3xl'>
          Redefining Sudan
        </h1>
      </div>
      <br />
      <br />
      <div className='lg:text-3xl space-y-6 leading-relaxed'>

  <p className='message-pr'>
    For decades, the world has seen Sudan through a broken lens — filtered by foreign narratives, 
    dismissed by silence, and painted in poverty. Most people don’t know Sudan. And worse — they think they do.
  

  
    They see desert. Hunger. War.<br />
    They think of a forgotten place in Africa. A place without meaning.<br />
    But Sudan was never that. Sudan was never empty.
  

    We were kingdoms. We were the architects of pyramids older than Egypt.<br />
    We led revolutions before Africa found its voice.<br />
    Our gold enriched empires. Our scholars shaped thought.<br />
    Our writers moved the world. Our people carried a legacy longer than your timelines can measure.

    We are the land of Kush. Of Meroë. Of Makuria and Alodia.<br />
    We are the Nile — not beside it, but inside it.

    The first Black Pharaoh to rule Egypt? Sudanese.<br />
    The country with the most pyramids on Earth? Sudan.<br />
    One of the oldest writing systems in Africa? From Sudan — still undeciphered today.

    But no one told you that.<br />
    Because no one wanted you to know.

    They told stories that erased our names.<br />
    They made movies that showed us as primitive.<br />
    They wrote us out of history — until we started writing it ourselves.

    This website is not a showcase. It is a protest.<br />
    It is a declaration that Sudan is not what you thought.<br />
    And it never was.

    We are not here to beg for attention.<br />
    We are here to remind you that we’ve always been here — brilliant, broken, powerful, and still rising.

    This is not just about Sudan.<br />
    It’s about truth.<br />
    About reclaiming what was stolen, ignored, or simplified.
  

    This is Sudan — redefined by us.<br />
    Not through pity.<br />
    Not through charity.<br />
    But through clarity.

    If you’ve read this far, then maybe…<br />
    just maybe…<br />
    you’re finally starting to see us.
  </p>

</div>

    </div>
    </>
  )
}



export default Modern
