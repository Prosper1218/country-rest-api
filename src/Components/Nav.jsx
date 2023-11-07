import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const Nav = () => {
     const {setDarkTheme , DarkTheme} = useContext(ThemeContext)
     return (
          <div className='w-full flex justify-between px-4 sm:px-8 h-[6rem] items-center'  style={{backgroundColor: DarkTheme?"#2b3945":"white", boxShadow:" 0 3px 10px rgb(0 0 0 / 0.2)"}}>

               <h2>Where in the world?</h2>
               <button onClick={()=>setDarkTheme(!DarkTheme)}>Darkmode</button>
          </div>
     )
}

export default Nav