'use client'
import React,{useState,useEffect,useRef} from 'react'
import { motion,useInView, useAnimation } from 'framer-motion'
import { Responsive, WidthProvider } from "react-grid-layout";
import StackElement from '../Elements/StackElement'
import {Languages} from '../../Assets/TechStackData'
const ResponsiveGridLayout = WidthProvider(Responsive);
const ProgLanguages = () => {
const [width,setWidth]=useState(Window.innerWidth)


useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const  logic=(index)=>{
    if(width<900){
        return index%2
    }else{
        return index%3
    }
  }
  return (
    <div className='w-[80vw] p-4 bg-techLight  dark:bg-lightText rounded-lg shadow-xl  gap-3'>
           <ResponsiveGridLayout allowOverlap={false} rowHeight={100}  cols={{lg:3,md:2}} autoSize  isDraggable={false}
    breakpoints={{lg:900,md:768}}
    >
       {Languages.map((item,index)=>{
            return(
                <div key={index} data-grid={{x:logic(index),y:0,w:1,h:1}}>
                    <StackElement id={item.id} name={item.name} icon={item.icon}/>
                </div>
            )
       })}
        
      </ResponsiveGridLayout>
           

    </div>
  )
}

export default ProgLanguages