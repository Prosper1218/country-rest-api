import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'



const CountryDetails = () => {
     scrollTo(0,0)
     const params = useParams()
     // console.log(params.id)
     const [Countries, setCountries] = useState([])

     useEffect(() => {
          scrollTo(0,0)
          const fetchData = async () => {
               try {
                    const response = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
                    const data = await response.json();
                    setCountries(data);
                    console.log(Countries)
               } catch (error) {
                    console.log('error')
               }
          };

          fetchData();
     }, []);
     return (
          <div className='w-[100%]'>


               <div className='c-article h-[6rem]'>
                    nav
               </div>
               <div className='c-article w-20 h-8 ml-12 mt-12 items-center flex px-2'>
                    <Link to={"/"}> <button className='flex gap-1 flex-row items-center text-xs font-sans'> <ArrowLeftIcon scale={1.5} />Back</button></Link>
               </div>

               {/*  */}
               <div>

                    {
                         Countries.map((country, index) => {
                              return (
                                   <div className='grid grid-cols-1 sm:grid-cols-2 px-4 pt-8 gap-6' key={index}>
                                        <img src={country.flags.png} alt="" className='w-full' />
                                        {/*  */}
                                        <div className='border'>
                                             <p className='font-sans text-left font-bold text-2xl tracking-wide'>{country.name.common}</p>
                                             {/*  */}
                                             <div className='grid grid-cols-1 md:grid-cols-2'>
                                                  <div className="border">
                                                       <div className='text-left text-md font-[600] items-center flex gap-1 mb-3'>Population:<p className='font-normal text-sm'> {country.population}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Region:<p className='font-normal text-sm'> {country.region}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Sub Region:<p className='font-normal text-sm'> {country.subregion}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Capital:<p className='font-normal text-sm'> {country.capital}</p></div>
                                                  </div>
                                                  <div className="border">
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Top Level Domain:<p className='font-normal text-sm'> {country.population}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Currencies:<p className='font-normal text-sm'> {Object.keys(country.currencies)}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Languages:<p className='font-normal text-sm'> {Object.values(country.languages)}</p></div>
                                                       <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Independent:<p className='font-normal text-sm'>  {country.independent ? "yes" : 'CHeck Google'}</p></div>

                                                  </div>
                                             </div>

                                             <div className='text-left text-md font-semibold items-center flex gap-1 mb-3'>Borders:<p className='font-normal text-sm'></p>

                                                  {/* <ul className="flex flex-wrap gap-4">
                                                       {country.borders.map((border) => {
                                                            const borderCountry = countries.find(
                                                                 (country) => country.cca3 === border,
                                                            );

                                                            const name = borderCountry.name.common;
                                                            const flag = borderCountry.flags.svg;

                                                            return (
                                                                 <li key={border}>
                                                                      <Button extraClass="px-2" to={`/country/${border}`}>
                                                                           <span className="flex items-center gap-2">
                                                                                <img src={flag} alt={name} width="24" height="16" />
                                                                                <span>{name}</span>
                                                                           </span>
                                                                      </Button>
                                                                 </li>
                                                            );
                                                       })}
                                                  </ul> */}
                                             </div>

                                        </div>


                                   </div>
                              )
                         })
                    }



               </div>

          </div>
     )
}

export default CountryDetails