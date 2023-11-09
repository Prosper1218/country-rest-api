import React, { useRef, useEffect, useContext } from 'react'
import { useState } from 'react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
// import ThemeC from './ThemeC'



const FilterBySearch = ({ Countries, setCountries, }) => {
     const [Value, setValue] = useState("")
     const [isError, setisError] = useState(false)

     useEffect(() => {
          // setValue('')
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
               <form action="" className='relative' >
                    <input type="text" name="Search" id="search" className='input w-full sm:w-80 h-[3rem] rounded-md relative pl-4 ' placeholder='Search for a country' value={Value} onChange={(e) => setValue(e.target.value)} />
                    <button className='absolute right-[0] top-0 bottom-0 w-12 items-center justify-center flex'><MagnifyingGlassIcon className=' scale-125' /></button>
               </form>
               <p className='font-serif text-sm pt-1'> {isError ? "No Country's Name Directly Matches Your Search😪" : null}</p>
          </div>
     )
}


export default FilterBySearch




