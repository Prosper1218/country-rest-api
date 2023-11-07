import './App.css'
import { createContext, useState } from 'react'
import Nav from './Components/Nav'
import FetchCountries from './Components/FetchCountries'
import '@radix-ui/themes/styles.css';
import CountryDetails from './Pages/CountryDetails';


export const ThemeContext = createContext()


function App() {
  const [DarkTheme, setDarkTheme] = useState(true)

  const ThemeStyles = {
    color: DarkTheme ? "white" : 'black',
    backgroundColor: DarkTheme ? "#25313c" : "white",
    height: "auto"
  }
  return (
    <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
      <div style={ThemeStyles}>
        <Nav />
        <FetchCountries />
      </div>
    </ThemeContext.Provider>
  )
}

export default App



// 2b3945