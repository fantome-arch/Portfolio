'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { motion } from 'framer-motion';
const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()
    useEffect(() => { setMounted(true) }, [])
    if (!mounted) { return  <div 
        className='flex justify-center align-middle  cursor-pointer'>
            <FaMoon  className='text-lightText  md:w-5 md:h-5 w-3 h-3'/>

        </div> }
    if (resolvedTheme === "light") {
        return (
            <motion.div 
            onClick={()=>{setTheme('dark')}}
            whileHover={{
                scale:1.2,
            }}
            whileTap={{scale:0}}
            className='flex justify-center align-middle  cursor-pointer'>
                <FaMoon  className='text-lightText  md:w-5 md:h-5 w-3 h-3' />

            </motion.div>
        )
    } else {
        return (
            <motion.div 
            onClick={()=>{setTheme('light')}}
            whileHover={{
                scale:1.2
            }}
            whileTap={{scale:0}}
            
            className='flex justify-center align-middle cursor-pointer'>
                <LuSun  className='text-white md:w-5 md:h-5 w-3 h-3 '/>

            </motion.div>
        )
    }

}

export default ThemeSwitch