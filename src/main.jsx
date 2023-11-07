import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import { Theme } from '@radix-ui/themes';
import CountryDetails from './Pages/CountryDetails';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} ></Route>
            <Route path='/CountryDetails/:id' element={<CountryDetails />} />
          {/*  */}
        </Routes>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>,
)
