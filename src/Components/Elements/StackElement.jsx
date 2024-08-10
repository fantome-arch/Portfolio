'use client'
import React,{useEffect,useRef} from 'react'
import { motion,useInView,useAnimation } from 'framer-motion'
const variants={
    ini:{
        scale:0,
    },
    anim:{
        scale:1
    }

}
const StackElement = ({id,name,icon}) => {
    const ref=useRef(null)
    const inView=useInView(ref)
    const controls=useAnimation()
    useEffect(()=>{
        if(inView){
            controls.start("anim")
        }
    },[inView])

  return (
    <motion.div initial="ini" animate={controls} transition={{delay:Math.random() * (0.5 - 0.4) + 0.4}} variants={variants} ref={ref} className='h-full w-full relative flex justify-center items-center flex-col'>
        <img src={icon} className='w-[50px] h-[50px] object-contain'/>
        <span className='text-lightText dark:text-white text-sm font-semibold '>{name}</span>

    </motion.div>
  )
}

export default StackElement