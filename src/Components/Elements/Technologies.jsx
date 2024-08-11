'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Responsive, WidthProvider } from "react-grid-layout";
import StackElement from '../Elements/StackElement'
import { TechData } from '../../Assets/TechStackData'
import { Languages } from '../../Assets/TechStackData'
const ResponsiveGridLayout = WidthProvider(Responsive);
const variants = {
    ini: {
        scaleX: 1,
        transformOrigin: 'left'

    },
    ini2: {
        scaleX: 1,
        transformOrigin: 'right',

    },
    anim1: {
        scaleX: 0,
        transformOrigin: 'left'
    },
    anim2: {
        scaleX: 0,
        transformOrigin: 'right'
    }
}
const Technologies = () => {
    const [width, setWidth] = useState(0)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const inView = useInView(ref1)
    const inView2 = useInView(ref2)
    const controls = useAnimation()
    const controls2 = useAnimation()

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize()
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        if (inView) {
            controls.start("anim1")
        }
        if (inView2) {
            controls2.start("anim2")
        }
    }, [inView, inView2])
    const logic = (index) => {
        
        if (width < 900) {
            return index % 2
        } else {

            return index % 3
        }
    }
    return (
        <div className='gap-3 flex flex-col items-center justify-center'>

            <div  ref={ref1} className='relative w-[80vw] p-4 bg-techLight  dark:bg-lightText rounded-lg shadow-lg  gap-3'>
                <span className='text-lg text-lightText dark:text-white pl-2 font-bold border-l-8 border-l-lightText dark:border-l-white'>Languages</span>
                <ResponsiveGridLayout allowOverlap={false} rowHeight={100} cols={{ lg: 3, md: 2 }}  isDraggable={false}
                    breakpoints={{ lg: 900, md: 768 }}
                >
                    {Languages.map((item, index) => {
                        return (
                            <div key={index} data-grid={{ x: logic(index), y: 0, w: 1, h: 1 }}>
                                <StackElement id={item.id} name={item.name} icon={item.icon} />
                            </div>
                        )
                    })}

                </ResponsiveGridLayout>
                <motion.div variants={variants}  initial="ini" animate={controls} transition={{duration:0.4}} className="absolute top-0 left-0 w-full h-full bg-text2">

                </motion.div>


            </div>
            <div ref={ref2} className=' relative w-[80vw] p-4 bg-techLight  dark:bg-lightText rounded-lg shadow-lg  gap-3'>
                <span className='text-lg text-lightText dark:text-white pl-2 font-bold border-l-8 border-l-lightText dark:border-l-white'>Technologies</span>
                <ResponsiveGridLayout allowOverlap={false} rowHeight={100} cols={{ lg: 3, md: 2 }}  isDraggable={false}
                    breakpoints={{ lg: 900, md: 768 }}
                >
                    {TechData.map((item, index) => {
                        return (
                            <div key={index} data-grid={{ x: logic(index), y: 0, w: 1, h: 1 }}>
                                <StackElement id={item.id} name={item.name} icon={item.icon} />
                            </div>
                        )
                    })}

                </ResponsiveGridLayout>
                <motion.div variants={variants} transition={{duration:0.4}} initial="ini2" animate={controls2} className="absolute top-0 left-0 w-full h-full bg-text2">

                </motion.div>


            </div>
        </div>

    )
}

export default Technologies