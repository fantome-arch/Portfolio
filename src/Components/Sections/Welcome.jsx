'use client'
import React from 'react'
import { TextGenerateEffect } from '../UI/TextGenerate'
import { motion } from 'framer-motion'
import Stars from '../../Assets/Stars'
const Welcome = () => {
  return (
    <div className='w-screen flex justify-center items-center h-[105vh] flex-row ' id="home">
      <div  className='absolute w-[100vw] h-[80vh]  overflow-hidden rounded-full flex justify-center items-center z-0 top-[10vh] filter blur-sm'>
        <Stars />
      </div>
      <div className='absolute w-full h-[80vh] overflow-hidden flex justify-center items-center z-10'>


        <TextGenerateEffect words="Turning a concept into code is where imagination meets implementation,creating solutions that shape the future"
          className='w-[50vw] flex justify-center items-center p-5' />
      </div>



    </div>
  )
}

export default Welcome