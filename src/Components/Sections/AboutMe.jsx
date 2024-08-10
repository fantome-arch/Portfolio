'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Programmer from '../../Assets/Programmer'
import Card1 from '../Elements/Card1'
import { FaUserGraduate } from "react-icons/fa";
const variants = {
    ini: { scaleY: 0, y: -10 },
    anim: { scaleY: 1, transformOrigin: 'top', y: 0 },
    ini2: { scaleX: 1, transformOrigin: 'right' },
    anim2: { scaleX: 0, transformOrigin: 'right' },
    programmer1: { scale: 0 },
    programmer2: { scale: 1 }
}
const AboutMe = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const controls = useAnimation()
    const controls2 = useAnimation()
    useEffect(() => {
        if (inView) {
            controls2.start('anim')
            controls2.start('programmer2')
            controls.start("anim2")

        }
    }, [inView])

    return (
        <div className=' w-[90vw] md:ml-10 ml-2 flex flex-col items-center' ref={ref} id="about">
            <div className='m-5 flex relative items-center justify-start gap-2 cursor-pointer'>
                <motion.div variants={variants} initial="ini" animate={controls2} transition={{ delay: 0.1 }}
                    className='w-[5px] h-[70px] bg-text2 '>

                </motion.div>
                <motion.span variants={variants} initial="ini" animate={controls2}
                    
                    transition={{ delay: 0.1 }} className='text-lightText gap-2 dark:text-white md:text-5xl text-3xl font-bold text-center flex items-center justify-center'>
                        <FaUserGraduate />
                        About Me
                </motion.span>
                <motion.div variants={variants} initial="ini2" transition={{ duration: 0.6 }} animate={controls} className=' rounded absolute w-full h-full bg-text2'>

                </motion.div>


            </div>
            <div className='flex gap-2 md:p-4 w-full items-start justify-center md:flex-row flex-col-reverse'>
                <div className='flex-1'>
                    <Card1 />

                </div>
                <div className='flex justify-center items-center relative'>
                    <motion.div className='flex justify-center items-center' variants={variants} initial="programmer1" animate={controls2} transition={{ duration: 1 }} >
                        <Programmer className="md:w-[40vw] md:h-[40vw] h-[400px] w-[400px]" />

                    </motion.div>
                    <motion.div variants={variants} initial="ini2" transition={{ duration: 0.6 }} animate={controls} className=' rounded absolute w-full h-full bg-text2'>

                    </motion.div>
                </div>


            </div>

        </div>
    )
}

export default AboutMe