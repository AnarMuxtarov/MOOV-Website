import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home/Home"
import Movie from '../Pages/Movie/Movie'
import TvShow from './TvShow/TvShow'
import Pricing from './Pricing/Pricing'
import Contacts from '../Pages/Contacts/Contacts'

const RouterComp = () => {
  return (
   <Routes>
   <Route path='/home' element={<Home/>}/>
   <Route path='/movie' element={<Movie/>}/>
   <Route path='/tvShow' element={<TvShow/>}/>
   <Route path='/pricing' element={<Pricing/>}/>
   <Route path='/contacts' element={<Contacts/>}/>

   </Routes>
  )
}

export default RouterComp