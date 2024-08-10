'use client'
import React,{createContext,useState} from 'react'


const NavContext = createContext()
export default NavContext
export const NavProvider = ({children}) => {
    const [selection,setSelection]=useState('home')
    const data={
        selection:selection,
        setSelection:setSelection
    }   
  return (
    <NavContext.Provider value={data}>
        {children}
    </NavContext.Provider>
  )
}
