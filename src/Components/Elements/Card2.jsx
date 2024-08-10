'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { ImagesSlider } from '../UI/Slider'
import Card2Overlay from '../Elements/Card2Overlay'
const variants = {
    ini: {
        rotateY: "-180deg",
    },
    anim: { rotateY: "0deg" },
    hoverEffect: {
        backdropFilter: 'blur(10px)',
        opacity: 1
    },
    unhover: {
        opacity: 0
    }
}
const Card2 = ({ id, title, images, description ,onClick}) => {
    const ref = useRef(null)
    const inView = useInView(ref)
    const controls = useAnimation()
    const controls2 = useAnimation()
    const controls3 = useAnimation()
    useEffect(() => {
        if (inView) {
            controls.start("anim")
        }
    }, [inView])
 

    return (
        <motion.div     onHoverStart={() => controls2.start('hoverEffect')}
        onHoverEnd={() => controls2.start('unhover')} style={{ backfaceVisibility: "hidden", perspective: '1000px', transformStyle: 'preserve-3d' }} variants={variants} initial="ini" animate={controls}
            transition={{ duration: 0.9 + Math.random() * (1.2 - 0.9), delay: 0.3 + Math.random() * (0.7 - 0.3) }} ref={ref}
            className=' relative  rounded-md shadow-lg   w-full h-full bg-cardLight dark:bg-lightText cursor-pointer z-0'>

            <motion.div onClick={()=>onClick(id)}   whileHover={{x:'5%'}}className=' absolute z-10 flex items-end justify-start w-full h-full top-0 left-0 '>
                <span className='ml-5  text-white font-bold md:text-2xl text-xl'>{title.length>24?title.splice(0,25):title}</span>
            </motion.div>
            <ImagesSlider direction={Math.random() < 0.5 ? 'up' : 'down'} className='h-full w-full' images={images} overlay={false} />
            <motion.div variants={variants} initial="unhover" animate={controls2}  className=" absolute z-[5] top-0 left-0  h-full w-full"></motion.div>

            <div
                className='absolute inset-0  bg-cardLight dark:bg-lightText flex items-center justify-center'
                style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
            ></div>
        </motion.div>
    )
}

export default Card2