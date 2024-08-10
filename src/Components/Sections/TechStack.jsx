'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

import { GrSystem } from "react-icons/gr";
import Technologies from '../Elements/Technologies'
const variants = {
    ini: { scaleY: 0, y: -10 },
    anim: { scaleY: 1, transformOrigin: 'top', y: 0 },
    ini2: { scaleX: 1, transformOrigin: 'right' },
    anim2: { scaleX: 0, transformOrigin: 'right' },

}
const TechStack = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const controls = useAnimation()
    const controls2 = useAnimation()
    useEffect(() => {
        if (inView) {
            controls2.start('anim')
            controls.start("anim2")


        }
    }, [inView])
    return (
        <div className=' w-[90vw] md:ml-10 ml-2 flex flex-col items-center' ref={ref} id="tech">
            <div className='m-5 flex relative items-center justify-start gap-2 cursor-pointer'>
                <motion.div variants={variants} initial="ini" animate={controls2} transition={{ delay: 0.1 }}
                    className='w-[5px] h-[70px] bg-text2 '>

                </motion.div>
                <motion.span variants={variants} initial="ini" animate={controls2}

                    transition={{ delay: 0.1 }} className='text-lightText gap-2  dark:text-white md:text-5xl text-3xl font-bold text-center flex items-center justify-center'>
                    <GrSystem /> 
                    My Tech Stack
                </motion.span>
                <motion.div variants={variants} initial="ini2" transition={{ duration: 0.6 }} animate={controls} className=' rounded absolute w-full h-full bg-text2'>

                </motion.div>


            </div>
            <div>
                <Technologies/>
            </div>


        </div>
    )
}

export default TechStack