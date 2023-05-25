import React, { useEffect } from 'react'
import "../styles/About.css"
import Counter from './Counter'

const about = () => {

  return (
    <div className='about_me_page'>
      <b className='about_me'>About Me</b>
      <div className='about_body'>
        <div className='information_about'>
        <h1 className='greet_about_me'>Hi, I'm Dmytro Garbar</h1>
          <p className='introduce_about_me'>I am a new Front-end React Developer based in Ukraine. It's my first project, but I am a fast learner and aim to become a professional in my profession. I have worked at GreenGeeks web hosting about 2 years as technical support and system administator</p>
          <div className='own_info'>
            <div className='first_colum'>
            <ul>
              <li>Age:<span className='my_info age'> 22 Years</span></li>
              <li>Nation:<span className='my_info nation'> Ukrainian</span></li>
              <li>languages:<span className='my_info langage s'> Ukrainian, English - B1</span></li>
            </ul>
            </div>
            <div className='second_colum'></div>
            <ul>
              <li>Address:<span className='my_info address'> Vinnytsia</span></li>
              <li>Phone:<span className='my_info phone'> SomeFone</span></li>
              <li>Email:<span className='my_info email'> SomeEmail</span></li>
            </ul>
          </div>
          <b className='what_i_studied'>What I studied ?</b>
          <Counter/>
        </div>
        <div className='images_abot'></div>
      </div>
    </div>
  )
}

export default about
