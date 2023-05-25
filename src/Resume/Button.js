import React from 'react'
import "../styles/Button.css"

const Button = ({style_Button, id, proops}) => {

  function Modal_window (){
    proops({id})
  }

  return (
    <div>
      <button className={style_Button} onClick={Modal_window}>More</button>
    </div>
      )
}

export default Button
