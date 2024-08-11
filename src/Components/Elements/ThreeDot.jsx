'use client'
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useEffect, useState } from 'react'
import { IoHome } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { GrSystem } from "react-icons/gr";
import debounce from 'lodash/debounce';
import { motion,AnimatePresence } from "framer-motion";
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About me' },
  { id: 'projects', label: 'Projects' },
  { id: 'tech', label: 'Section 3' },
];
const ThreeDot = () => {
  const [selection, setSelection] = useState('')
  const [shown, setShown] = useState(false)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setSelection(section.id);
          }
        }
      });
    }, 100);

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set the initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='p-2 flex justify-center align-middle   md:hidden'>
      <div onClick={() => { setShown(!shown) }}>
        {shown?<IoMdClose 
        className='text-lightText dark:text-white cursor-pointer text-3xl ' />:
        <RxHamburgerMenu className='text-lightText dark:text-white cursor-pointer  text-3xl' />}
        

      </div>
      <AnimatePresence>
      {shown && (
        <motion.div initial={{x:-100}} animate={{x:0}} exit={{x:-100}} key="nav" 
        className="rounded-lg backdrop-blur-lg fixed left-0 w-[100px] top-[10vh]   z-[25] h-[88vh]">
       


          <div className='absolute z-30 flex flex-col justify-center gap-20 items-center h-full w-full'>
            <div className='flex flex-col w-full cursor-pointer'>
              <span onClick={() => { scrollToSection('home') }} className={` ${selection === 'home' ?
                 'text-lightText dark:text-white' : 'text-unselectlight dark:text-unselectdark'} font-bold text-xl flex flex-col items-center justify-center `} >
                <IoHome />
                Home
              </span>


            </div>

            <div onClick={() => { scrollToSection('about') }} className='flex flex-col   w-full  cursor-pointer'>
              <span className={`${selection === 'about' ? 'text-lightText dark:text-white' : 'text-unselectlight dark:text-unselectdark'} font-bold text-xl flex flex-col items-center justify-center `}>
                <FaUserGraduate />
                About
              </span>


            </div>

            <div onClick={() => { scrollToSection('projects') }} className='flex flex-col w-full cursor-pointer'>
              <span className={` ${selection === 'projects' ? 'text-lightText dark:text-white' : 'text-unselectlight dark:text-unselectdark'}  flex flex-col items-center justify-center text-xl  font-bold`}>
                <IoBriefcase />
                Projects
              </span>


            </div>

            <div onClick={() => { scrollToSection('tech') }} className='flex flex-col  w-full cursor-pointer'>
              <span className={` ${selection === 'tech' ? 'text-lightText dark:text-white' : 'text-unselectlight dark:text-unselectdark'} font-bold text-xl flex flex-col items-center justify-center `}>
                <GrSystem />
                Tech
              </span>


            </div>

          </div>

        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}

export default ThreeDot