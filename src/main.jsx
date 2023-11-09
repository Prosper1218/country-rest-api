import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Theme } from '@radix-ui/themes';
import CountryDetails from './Pages/CountryDetails';
import LayOut from './Pages/LayOut';
import FetchCountries from './Components/FetchCountries';
import "./App.css"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />}>
            <Route path='/' element={<FetchCountries />} > </Route>
            <Route path='/CountryDetails/:id' element={<CountryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>,
)
