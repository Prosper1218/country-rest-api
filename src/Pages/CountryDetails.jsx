import React, { lazy, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ThemeCon } from './LayOut'
import { Loading } from 'react-loading-dot'
import { motion } from 'framer-motion'


const CountryDetails = () => {
     scrollTo(0, 0)
     const { DarkTheme } = useContext(ThemeCon)
     const params = useParams()
     const [Countries, setCountries] = useState([])
     const [Isloading, setIsloading] = useState(true)

     useEffect(() => {
          scrollTo(0, 0)
          const fetchData = async () => {
               try {
                    const response = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
                    const data = await response.json();
                    setCountries(data);
                    setIsloading(false)
               } catch (error) {
                    console.log('error')
               }
          };

          fetchData();
     }, []);

     console.log(DarkTheme)

     if (Isloading) {
          return (
               <Loading background={DarkTheme ? "white" : "#324454"} />
          )
     }
     return (
          <div className='w-[100%] min-h-[100vh] ' >
               <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, }}
                    viewport={{ once: true }}
                    className='c-article w-20 h-10 sm:ml-16 mt-12 mb-4 items-center flex ml-4 justify-center pl-8 pr-4 rounded-md'
                    whileHover={{ scale: 1.2 }}
               >

                    <Link to={"/"}>
                         <button className='flex gap-1 flex-row items-center text-xs font-sans'> <ArrowLeftIcon scale={1.6} />Back</button>
                    </Link>
               </motion.div>

               {/*  */}
               <motion.div
                    initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, }}
                    viewport={{ once: true }}>

                    {
                         Countries.map((country, index) => {
                              return (
                                   <div className='grid grid-cols-1 md:grid-cols-2 px-4 pt-8 gap-12 items-start' key={index}>
                                        <div className=' h-[100%] pl-0 md:pl-12'> <LazyLoadImage src={country.flags.png} alt="" className='w-full h-[100%]' /></div>
                                        {/*  */}
                                        <div className=''>
                                             <p className='font-sans text-left font-bold text-2xl tracking-wide'>{country.name.common}</p>
                                             <br />
                                             {/*  */}
                                             <div className='grid grid-cols-1 md:grid-cols-2'>
                                                  <div className="">
                                                       <div className='text-left text-md font-[600] items-center flex gap-1 mb-3'>Population:<p className='font-normal text-sm'> {country.population}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Region:<p className='font-normal text-sm'> {country.region}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Sub Region:<p className='font-normal text-sm'> {country.subregion}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Capital:<p className='font-normal text-sm'> {country.capital}</p></div>
                                                  </div>
                                                  <div className="">
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Top Level Domain:<p className='font-normal text-sm'> {country.population}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Currencies:<p className='font-normal text-sm'> {Object.keys(country.currencies)}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Languages:<p className='font-normal text-sm'> {Object.values(country.languages)}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1'>Independent:<p className='font-normal text-sm'>  {country.independent ? "yes" : 'CHeck Google'}</p></div>

                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              )
                         })
                    }
                   

               </motion.div>

          </div>
     )
}

export default CountryDetails