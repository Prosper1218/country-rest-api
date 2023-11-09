import React from 'react'
import { Outlet } from 'react-router-dom'

const Footer = () => {
     return (
          <div className='absolute bottom-0 w-full min-h-[80px] flex justify-center pt-6' id='footer'>
               <p className='text-sm font-bold font-sans text-center'>By <a href="https://twitter.com/Prosperwills28" className='underline' target='blank'>Prosper Williams</a></p>
          </div>

     )
}

export default Footer

// cypher 