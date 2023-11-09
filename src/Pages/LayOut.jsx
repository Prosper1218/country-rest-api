import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { createContext, useState } from 'react';


export const ThemeCon = createContext()


const LayOut = () => {
     const [DarkTheme, setDarkTheme] = useState(true)




     const Tstyles = {
          color: DarkTheme ? "white" : "black",
          backgroundColor: DarkTheme ? "#2b3945" : 'white',
     }

     return (
          <ThemeCon.Provider value={{ DarkTheme, setDarkTheme }}>
               <div className='min-h-[100vh]' style={Tstyles}>
                    <nav>
                         <Nav />
                    </nav>

                    <Outlet />


                    <footer className=''>
                         <Footer />
                    </footer>
               </div>
          </ThemeCon.Provider>
     )
}

export default LayOut