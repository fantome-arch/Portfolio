'use client'
import React, { useEffect, useState } from 'react'
import { IoHome } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";
import { GrSystem } from "react-icons/gr";
import debounce from 'lodash/debounce';
import { motion, useAnimation } from 'framer-motion';


const sections = [
  { id: 'home', label: 'Home', num: 0, id2: 'homebtn' },
  { id: 'about', label: 'About me', num: 1, id2: 'aboutbtn' },
  { id: 'projects', label: 'Projects', num: 2, id2: 'projectsbtn' },
  { id: 'tech', label: 'Section 3', num: 3, id2: 'techbtn' },
];

const NavBar = () => {
  const [selection, setSelection] = useState({ title: '', width: 0, left: 0, num: -1, id: null })

  const controls = useAnimation()
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        const element2 = document.getElementById(section.id2);


        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            const rect = element2.getBoundingClientRect();

            setSelection(prev => {
              if (prev.id) {
                const Toelement = document.getElementById(section.id2);
                const fromElement = document.getElementById(prev.id);
                const rect1 = fromElement.getBoundingClientRect();
                const rect2 = Toelement.getBoundingClientRect();
                controls.start({
                  left: [rect1.left, rect2.left],
                  transformOrigin: 'left',

                })
              }
              return (

                {
                  title: section.id,
                  width: rect.width,
                  left: rect.left,
                  id: section.id2,
                }
              )
            }



            );
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
  useEffect(() => {
    const handleResize = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        const element2 = document.getElementById(section.id2);


        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            const rect = element2.getBoundingClientRect();

            setSelection(prev => {
              if (prev.id) {
                const Toelement = document.getElementById(section.id2);
                const rect2 = Toelement.getBoundingClientRect();
                controls.start({
                  left: rect2.left,
                  transformOrigin: 'left',

                })
              }
              return (

                {
                  title: section.id,
                  width: rect.width,
                  left: rect.left,
                  id: section.id2,
                }
              )
            }



            );
          }
        }
      });


    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  const handleClickTosec = (section) => {

    scrollToSection(section);


  }
  return (
    <div>
      <nav id="navboss" className='md:flex justify-between items-center hidden w-[50vw] '>

        <div id="homebtn" onClick={() => { handleClickTosec('home') }} className={`flex flex-col gap-1  cursor-pointer border-b-4 border-b-transparent
         ${selection.title !== 'home' ? 'hover:border-b-unselectlight dark:hover:border-b-unselectdark hover:border-b-4  ' : ''}`}>
          <span className={`gap-1 ${selection.title === 'home' ? 'text-lightText dark:text-white' : 'text-unselectlight dark:text-unselectdark'} font-bold text-lg  flex items-center justify-center`} >
            <IoHome />
            Home
          </span>
        </div>

        <div id="aboutbtn" onClick={() => { handleClickTosec('about') }} className={`flex flex-col gap-1  cursor-pointer border-b-4 border-b-transparent
         ${selection.title !== 'about' ? 'hover:border-b-unselectlight dark:hover:border-b-unselectdark hover:border-b-4  ' : ''}`}>
          <span className={`gap-1 ${selection.title === 'about' ? 'text-lightText dark:text-white' : 'text-unselectlight dark:text-unselectdark'} font-bold text-lg  flex items-center justify-center`}>
            <FaUserGraduate />
            About
          </span>



        </div>
        <div id="projectsbtn" onClick={() => { handleClickTosec('projects') }} className={`flex flex-col gap-1  cursor-pointer border-b-4 border-b-transparent
         ${selection.title !== 'projects' ? 'hover:border-b-unselectlight dark:hover:border-b-unselectdark hover:border-b-4  ' : ''}`}>
          <span className={`gap-1 ${selection.title === 'projects' ? 'text-lightText dark:text-white' : 'text-unselectlight dark:text-unselectdark'} font-bold text-lg  flex items-center justify-center`}>
            <IoBriefcase />
            Projects
          </span>



        </div>
        <div id="techbtn" onClick={() => { handleClickTosec('tech') }} className={`flex flex-col gap-1  cursor-pointer border-b-4 border-b-transparent
         ${selection.title !== 'tech' ? 'hover:border-b-unselectlight dark:hover:border-b-unselectdark hover:border-b-4  ' : ''}`}>
          <span className={`gap-1 ${selection.title === 'tech' ? 'text-lightText dark:text-white' : 'text-unselectlight dark:text-unselectdark'} font-bold text-lg  flex items-center justify-center`}>
            <GrSystem />
            Tech
          </span>


        </div>


      </nav>
      {selection.num !== -1 && (
        <motion.div animate={controls} className={`dark:bg-white bg-lightText absolute hidden md:block`} style={{ width: selection.width + 3, height: '5px' }}>
        </motion.div>
      )}
    </div>

  )
}

export default NavBar