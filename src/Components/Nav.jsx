import React from 'react'
import { useContext } from 'react'
import { ThemeCon } from '../Pages/LayOut'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { motion } from 'framer-motion'


const Nav = () => {
     const { DarkTheme, setDarkTheme } = useContext(ThemeCon)

     return (
          <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.7 }}
           className='w-full flex justify-between px-4 sm:px-8 h-[6rem] items-center nav' style={{ backgroundColor: DarkTheme ? "#324454" : "white" }}>

               <h2 className='text-lg sm:text-2xl font-serif'>Where in the world🤗?</h2>
               <button onClick={() => setDarkTheme(!DarkTheme)} className='btn px-3 py-2 rounded-md text-xs font-bold' style={{ backgroundColor: DarkTheme ? "#324454" : "white" }}>
                    {
                         DarkTheme ?
                              <p className='flex items-center gap-2'>Light Mode <SunIcon style={{ scale: "1.5" }} /></p>
                              :
                              <p className='flex items-center gap-2'>Dark Mode <MoonIcon style={{ scale: "1.5" }} /></p>

                    }

               </button>

          </motion.div >
     )
}

export default Nav