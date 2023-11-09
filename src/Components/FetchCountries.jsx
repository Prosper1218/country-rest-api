import React, { useState, useEffect, useRef, useContext } from 'react';
import { filter } from '../Data';
import { Link } from 'react-router-dom';
import FilterBySearch from './FilterBySearch';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Loading } from 'react-loading-dot'
import { ThemeCon } from '../Pages/LayOut';
import { motion } from 'framer-motion';



const FetchCountries = () => {
     const [Countries, setCountries] = useState([]);
     const regioninput = useRef()
     const [FilteredCountry, setFilteredCountry] = useState([])
     const [isLoading, setisLoading] = useState(true)
     const { DarkTheme } = useContext(ThemeCon)


     useEffect(() => {

          const fetchData = async () => {
               try {
                    const response = await fetch('https://restcountries.com/v3.1/all');
                    const data = await response.json();
                    setCountries(data);
                    setisLoading(false)
               } catch (error) {
                    <p>error fetching data</p>
               }
          };

          fetchData();
     }, []);




     useEffect(() => {

          const fetchData = async () => {
               try {
                    const response = await fetch('https://restcountries.com/v3.1/all');
                    const data = await response.json();
                    // console.log(data)
                    setFilteredCountry(data)

               } catch (error) {
                    <p>error fetching data</p>
               }
          };


          fetchData();
     }, [])


     const handlefilter = () => {
          const currentdata = regioninput.current.value
          const newC = FilteredCountry.filter((C => C.region === currentdata))
          setCountries(newC)
          if (currentdata === filter[0]) {
               setCountries(FilteredCountry)
          }
     }

     if (isLoading) {
          return <Loading background={DarkTheme ? "white" : "#324454"} />

     }

     return (
          <div style={{ minHeight: "100%" }}>




               <div className='w-full px-16 md:px-24 flex flex-col sm:flex-row justify-between pt-8 gap-8'>
                    <div>
                         <FilterBySearch countries={Countries} setCountries={setCountries} />
                    </div>

                    <div>

                         <div>
                              <select name="Select" className="dropdown pl-3 py-3 rounded-md text-xs" ref={regioninput} onChange={handlefilter} style={{ backgroundColor: DarkTheme ? "#324454" : 'white' }}>

                                   {
                                        filter.map((by) => {
                                             return <option className='opt' key={by}>
                                                  {by}
                                             </option>
                                        })
                                   }
                              </select>
                         </div>
                    </div>
               </div>

               <motion.section
                    initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, }}
                    viewport={{ once: true }}
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-4 sm:px-8 md:px-24 pt-10 mt-4 pb-4'>
                    {
                         Countries.map((country, index) => {
                              return (
                                   <article key={index} className='cc-article rounded-md pb-6' >
                                        <Link to={`/CountryDetails/${country.name.common}`} >
                                             <LazyLoadImage src={country.flags.png} alt={country.name.common} loading='lazy' className='w-full h-[12.5rem] rounded-t-md' />
                                             <p className='text-left pl-4 pt-4 font-bold'>{country.name.common}</p>


                                             <div className='text-left pl-4 pt-2 text-sm font-semibold flex gap-2'>Population:<p className='font-normal font-sans'> {country.population}</p></div>
                                             <div className='text-left pl-4 text-sm font-semibold flex gap-2'>Region:<p className='font-normal font-sans'> {country.region}</p></div>
                                             <div className='text-left pl-4 text-sm font-semibold flex gap-2'>Capital:<p className='font-normal font-sans'> {country.capital}</p></div>

                                        </Link>
                                   </article>
                              )
                         })
                    }
               </motion.section>
          </div >
     )
}
// 

export default FetchCountries
