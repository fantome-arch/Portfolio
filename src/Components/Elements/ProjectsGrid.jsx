'use client'
import React,{useState} from 'react'
import { Responsive, WidthProvider } from "react-grid-layout";
import Card2 from '../Elements/Card2'
const ResponsiveGridLayout = WidthProvider(Responsive);
import {DefaultData} from '../../Assets/Data'
import Modal from '../Elements/Modal'
import { AnimatePresence } from 'framer-motion';

const logic=(n)=>{
if(n===0){
    return 0
}else if(n===1 || n===2){
    return 1
}else {
    return 2
}
}

const ProjectsGrid = () => {
    const [openModal,setOpenModal]=useState({open:false,id:null})
    const modalOpened=(id)=>{

        setOpenModal({open:true,id:id})
 
    }
    const closeModal=()=>{
        setOpenModal({open:false,id:null})
    }

  return (
    <> 
    <ResponsiveGridLayout allowOverlap={false} rowHeight={350}  cols={{lg:3,md:1}} autoSize  isDraggable={false}
    breakpoints={{lg:900,md:768}}
    >

        {DefaultData.map((item,index)=>{
            return(
                <div  key={index} className=' relative'  data-grid={{x:logic(index%4),y:0,w:index%4===1?2:1,h:index%4===0?2:1}}>
                    
                   <Card2 onClick={modalOpened} images={item.images} title={item.title} id={item.id} description={item.description}/>
                    
                    </div>
            )
        })}
        
     
       
      </ResponsiveGridLayout>
        <AnimatePresence mode='sync'>
            {openModal.open &&(
          <Modal id={openModal.id} close={closeModal}/>

      )}
        </AnimatePresence>
      

    </>
   
  )
}

export default ProjectsGrid