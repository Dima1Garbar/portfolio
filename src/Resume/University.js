import React from 'react'
import "../styles/University.css"

const University = () => {
  return (
    <div className='university_window'>
        <div className='img_of_university'></div>
        <h1 className='years'>2017-2021</h1>
        <div className='text_university'>
            <p className='about university'>
            Vasyl’ Stus Donetsk National University is an open academic community that is a leading educational, scientific and innovation centre. Today Vasyl’ Stus DonNU is a strong educational and scientific complex of IV accreditation level, one of the leading higher education institutions of Ukraine, the best higher education institution of Vinnytsia and Vinnytsia oblast.
            </p>
            <p>   </p>
            <p className='about'>I studied at the Faculty of Physics and Technology, majoring in "Software development and computer graphics". There I studied OOP, Python, Java, JS, HTML, CSS, MySql, Photoshop
            </p> 
        </div>
    </div>
  )
}

export default University
