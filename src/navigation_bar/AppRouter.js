import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from '../HomePage/Home';
import About from "../About/About"
import Resume from "../Resume/Resume"
import Skills from "../Skills/Skills"
import Contact from '../Contact/Contact';

const AppRouter = () => {
  return (

    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   
  )
}

export default AppRouter
