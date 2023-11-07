import React, { useRef, useEffect } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import { useState } from 'react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const FilterBySearch = ({ Countries, setCountries, }) => {
     const { DarkTheme } = useContext(ThemeContext)
     const [Value, setValue] = useState("")
     const [isError, setisError] = useState(false)


     useEffect(() => {

          if (Value.trim() === '') {
               setisError(false)
               return
          }
          const fetchData = async () => {
               try {
                    const response = await fetch(`https://restcountries.com/v3.1/name/${Value}`);
                    if (!response.ok) {
                         throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setCountries(data);
                    setisError(false)
               } catch (error) {
                    console.log("there was an error", error)
                    setisError(true)

               }
          }

          fetchData()
     }, [Value])




     return (
          <div>
               <form action="" className='relative'>
                    <input type="text" name="Search" id="search" className='input w-full sm:w-80 h-[3rem] rounded-md relative pl-4 ' placeholder='Search for a country' value={Value} onChange={(e) => setValue(e.target.value)} style={{ backgroundColor: DarkTheme ? " #2b3945 " : "white" }} />
                    <button className='absolute right-[0] top-0 bottom-0 w-12 items-center justify-center flex'><MagnifyingGlassIcon className=' scale-125' /></button>
               </form>
               <p className='font-serif text-sm pt-1'> {isError ? "No Country's Name Directly Matches Your Search😪" : null}</p>
          </div>
     )
}


export default FilterBySearch