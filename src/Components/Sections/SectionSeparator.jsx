'use client'
import React, { useEffect,useRef } from 'react'
import { motion,useAnimation,useInView } from 'framer-motion'
const variants = {
    ini: { scaleX: 1,  transformOrigin: 'left' },
   
}
const SectionSeparator = () => {
    const ref=useRef(null)
    const inView=useInView(ref)
    const controls=useAnimation()
    useEffect(()=>{
        if(inView){
            controls.start("ini")
        }
    },[inView])
  return (
    <div ref={ref} className='w-screen h-[20vh] flex justify-center items-center'>
        <motion.div initial={{scaleX:0}} variants={variants} transition={{duration:0.5}} animate={controls} className='w-[80%] h-[10px] bg-bordercol'>

        </motion.div>
    </div>
  )
}

export default SectionSeparator