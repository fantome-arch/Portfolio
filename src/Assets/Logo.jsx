'use client'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
const Logo = ({ className }) => {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => { setMounted(true) }, [])
    if (!mounted) {

        return (

            <div className='absolute top-0 left-0 z-50 w-[200vw] h-[500vh]  bg-white pointer-events-none overflow-hidden'>

            </div>

        )
    }
    if (resolvedTheme === 'dark') {
        return (
            <span className='w-full h-full md:w-auto md:h-auto cursor-pointer flex justify-center items-center'>
                <img className={className} src="https://see.fontimg.com/api/renderfont4/BW0ox/eyJyIjoiZnMiLCJoIjo2MSwidyI6MTAwMCwiZnMiOjYxLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QWZuYW4/aquire.png" alt="Logo fonts" />
            </span>
        )
    } else {
        return (
            <span className='cursor-pointer w-full h-full md:w-auto md:h-auto flex justify-center items-center'><img className={className} src="https://see.fontimg.com/api/renderfont4/BW0ox/eyJyIjoiZnMiLCJoIjo2MSwidyI6MTAwMCwiZnMiOjYxLCJmZ2MiOiIjMzMwMjUxIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QWZuYW4/aquire.png" alt="Logo fonts" />
            </span>
        )
    }

}

export default Logo