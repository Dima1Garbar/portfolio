import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/NavigationBar.css"

const Navigation = () => {

  const [color, setColor] = useState("aliceblue")


  useEffect ( () => {
    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = color
    if (color === "aliceblue"){
      bodyElt.style.color = "black";
      var elems = document.querySelectorAll("div.blocks");
      var elems_color = document.querySelectorAll("p.contact_text");
      document.querySelectorAll("svg.bi-emoji-sunglasses")[0].style.fill = "black"
      document.querySelectorAll("svg.bi-emoji-sunglasses-fill")[0].style.fill = "black"
      for ( var i = 0; i < elems.length; i++) {
        elems[i].style.backgroundColor = "black";
      }
      for ( var i = 0; i < elems_color.length; i++) {
        elems_color[i].style.color = "aliceblue";
      }
  }
    else{
      bodyElt.style.color = "aliceblue";
      var elems = document.querySelectorAll("div.blocks");
      var elems_color = document.querySelectorAll("p.contact_text");
      document.querySelectorAll("svg.bi-emoji-sunglasses")[0].style.fill = "aliceblue"
      document.querySelectorAll("svg.bi-emoji-sunglasses-fill")[0].style.fill = "aliceblue"
      for ( var i = 0; i < elems.length; i++) {
          elems[i].style.backgroundColor = "aliceblue";
        }
      for ( var i = 0; i < elems_color.length; i++) {
        elems_color[i].style.color = "black";
      }
    }
  }, [color]
  )

  const test = (colorr) => {
    setColor(colorr)
  }

  return (
    <div>
      <div className='Flag'>
        <p className='greet_1'>Hello! My name is Dima and</p>
        <p className='greet_2'>it is my portfolio project</p>
      </div>
      <div className='Navigation_bar'> 
        <div className='Change_color'>
          <button className='Change_color_buttons' onClick={ () => test("aliceblue")}>
            <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-emoji-sunglasses bi-emoji-sunglasses_both" viewBox="0 0 16 16">
              <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/>
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
            </svg>
          </button>
          <button className='Change_color_buttons' onClick={() => test("black")}>
            <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-emoji-sunglasses-fill bi-emoji-sunglasses_both" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM4.969 9.75A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z"/>
            </svg>
          </button>
        
       </div>
        <div className='Links'>
          <Link className='nav link_to_home' to="/home">Home</Link>
          <Link className='nav link_to_about' to="/about">About Me</Link>
          <Link className='nav link_to_resume' to="/resume">Resume</Link>  
          <Link className='nav link_to_skills' to="/skills">Skills</Link>
          <Link className='nav link_to_contact' to="/contact">Contact me</Link>                    
        </div>
      </div>
    </div>
  )
}

export default Navigation
