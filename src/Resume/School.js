import React from 'react'
import "../styles/School.css"

const School = () => {
  return (
    <div className='school_window'>
        <div className='img_of_school'></div>
        <h1 className='years'>2006-2017</h1>
        <div className='text_school'>
            <p className='about_school'>
            This is an ordinary school that is no different from other schools. 
            There I studied, played volleyball and chess. I could not even imagine <span className='move_to_center'>that I would work in IT.</span></p>
        </div>
    </div>
  )
}

export default School
