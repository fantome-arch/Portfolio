'use client'
import React from 'react'
import Logo from '../../Assets/Logo'
import NavBar from '../Sections/NavBar'
import ThreeDot from '../Elements/ThreeDot'
import ThemeSwitch from '../Elements/ThemeSwitch'

export const Top = () => {


  return (
    <section className='fixed top-0  w-screen h-[10vh] z-20 shadow-lg dark:shadow-none bg-white dark:bg-darkbg  rounded-md'>
      
      <div className='absolute z-30 w-full h-full p-7 flex justify-between  items-center '>
        <ThreeDot />
        <Logo className="w-[80px] md:w-[10vw]" />
        <NavBar/>
        <ThemeSwitch />
      </div>
    

    </section>
  )
}
