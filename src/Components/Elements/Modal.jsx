'use client'
import React, { useEffect, useState } from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from 'framer-motion'
import Link from 'next/link';
import Linkify from 'linkify-react';
import { DefaultData } from '../../Assets/Data';
const Modal = ({ id, close }) => {
  const [data, setData] = useState({})
  console.log(data)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    setData(DefaultData.find(item => { return item.id === id }))
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const renderLink = ({ attributes, content }) => {
    const { href, ...props } = attributes;
    return (
      <Link href={href}>
        <span className='text-lightText cursor-pointer dark:text-white font-semibold underline' {...props}>{content}</span>
      
      </Link>
    )
  };
  return (
    <motion.div key='backdrop' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} transition={{ opacity: { duration: 0.4 } }} className='fixed h-full w-full top-0 left-0 z-[100] backdrop-blur-md overflow-hidden flex justify-center
    items-center'>
      <motion.div key="modal" initial={{ scale: 0 }} animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0 }} onClick={(e) => { e.stopPropagation() }} className="absolute md:w-[50vw] md:h-[80vh] w-[100vw] h-[100vh]  bg-cardLight
 dark:bg-lightText rounded-lg shadow-xl overflow-y-auto">
        <div onClick={close} className="h-[14%] w-full p-3 flex items-center justify-end cursor-pointer">
          <motion.div whileHover={{opacity:0.5}} whileTap={{scale:0.8}}>
            <IoCloseCircleSharp className='dark:text-white text-lightText text-3xl' />

          </motion.div>
        </div>
        <div className='w-full h-[25%] flex flex-col justify-center items-center p-4'>

          <motion.img initial={{ opacity: 0, y: '20%' }}
            animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} src={data?.icon} className='object-cover md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full ' />

          <motion.span initial={{ scale: 0, x: '20%' }}
            animate={{ scale: 1, x: 0 }} transition={{ delay: 0.3 }} className='md:text-xl text-lg'>{data?.title}</motion.span>
        </div>
        <Linkify options={{render:renderLink}}>
        <motion.div  initial={{opacity:0,y:'25%'}} animate={{opacity:1,y:0}} transition={{delay:0.4}} className='dark:text-white  text-lightText text-center p-4'>
          {data?.description?.split('\n').map((line,index)=>{
            return(
              <span className='text-lg'>
                {line}
                <br/>
              </span>
            )
          })}
       

       
        </motion.div>
        </Linkify>
     
  


      </motion.div>



    </motion.div>
  )
}

export default Modal