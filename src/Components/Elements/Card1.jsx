'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const about = `Hello! I'm Afnan, a passionate web developer with a knack for 
creating intuitive and engaging digital experiences. With 3 years of experience coding as hobby, 
I've honed my skills in front-end and back-end development,
 making me a versatile and resourceful developer.My journey into web development started with a curiosity about how websites work 
 and a desire to build my own. What began as a hobby quickly became a significant part of my life. Through continuous learning and hands-on experience, I've mastered both front-end and back-end development, 
 transforming my curiosity into a valuable skill set.Front-End Development: Creating visually appealing and user-friendly interfaces with HTML, CSS, and JavaScript, using frameworks like React and Vue.js to enhance functionality.
Back-End Development: Developing robust server-side applications with Node.js and Express, and integrating databases such as MongoDB and SQL for dynamic data management.
Full-Stack Solutions: Combining my expertise in both front-end and back-end technologies to deliver well-rounded solutions that address both user experience and system performance.
Performance Optimization: Ensuring applications run smoothly and efficiently by optimizing code and implementing effective performance strategies.

 
 
 
 `

const variants = {
  ini: { scaleY: 0, y: -10 },
  anim: { scaleY: 1, transformOrigin: 'top', y: 0 },
  ini2: { scaleX: 1, transformOrigin: 'left' },
  anim2: { scaleX: 0, transformOrigin: 'left' }
}
const Card1 = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const controls = useAnimation()
  const controls2 = useAnimation()
  const [readMode,setReadMode]=useState(false)
  useEffect(() => {
    if (inView) {
      controls2.start("anim")
      controls.start("anim2")
    }
  }, [inView])
  return (
    <div
    
    ref={ref} className={`rounded-lg shadow-lg bg-cardLight cursor-pointer dark:bg-lightText relative `}>
      <div className='p-4 flex gap-4'>
        <motion.div variants={variants} initial="ini" animate={controls2} transition={{ delay: 0.2, duration: 1 }} className=' rounded w-[50px] bg-text2'>

      </motion.div>
      <motion.p variants={variants} initial="ini" animate={controls2} transition={{ delay: 0.1 }} className='text-xl md:text-2xl'>
        {about.length > 1500 ? about.substring(0, 1500) : about}
        
      </motion.p>
      </div>
      <motion.div variants={variants} initial="ini2" transition={{ duration: 0.6 }} animate={controls} className=' rounded top-0 left-0 absolute w-full h-full bg-text2'>

      </motion.div>
      
    

    </div>
  )
}

export default Card1