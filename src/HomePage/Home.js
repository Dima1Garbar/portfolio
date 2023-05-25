import React, { useState } from 'react';
import DownloadMyCv from './DownloadMyCv';
import "../styles/HomePage.css"

const Home = () => {
  return (
   <div className='home_page'>
      <div className='my_foto'></div>
      <div className='introduce'>
        <h2 className='greeting'>Hello, I am Dmytro Garbar</h2>
        <h1 className='profession'>Web Developer</h1>
        <div className='introduce_myself'>
        <p className='from'>I am a new Front-end React Developer based in Ukraine. </p>
        <p className='goal'>It is my first project, but I am a fast learner and aim to</p>
        <p> become a professional in my profession</p>
        <DownloadMyCv/>
        </div>
      </div>
   </div>
  )
}

export default Home
