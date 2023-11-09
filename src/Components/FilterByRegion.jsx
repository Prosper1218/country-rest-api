import React, { useEffect, useState } from 'react'
import { filter } from '../Data'
import { useRef } from 'react'
import { useContext } from 'react'


const FilterByRegion = ({ Countrys, setCountrys }) => {
  const regioninput = useRef()
  const [FilteredCountry, setFilteredCountry] = useState([])


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        // console.log(data)
        setFilteredCountry(data)
        setCountrys(data)

      } catch (error) {
        <p>error fetching data</p>
      }
    };


    fetchData();
    console.log(Countrys)
  }, [])




  const handlefilter = () => {
    const currentdata = regioninput.current.value
    const newC = FilteredCountry.filter((C => C.region === currentdata))
    // console.log(newC)
  }



  return (
    <div>
      <div>
        <select name="Select" className="dropdown pl-3 py-3 rounded-md " ref={regioninput} onChange={handlefilter} style={{ backgroundColor: DarkTheme ? " #2b3945 " : "white" }}>

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
  )
}

export default FilterByRegion






// const handlefilter = () => {
//   if (data === filter[1]) {
//     const filteredD = data.filter((info) => info.region === filter[1])
//     console.log(filteredD)
//   }
// }



