import React from 'react'
import "../styles/Modal.css"

const Modal = ({children, visible, setVisible}) => {
  
    const rootClasses = ["myModal"]

    if (visible){
        rootClasses.push("active")
    }

    return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className='myModalContent'>
        {children}
      </div>
    </div>
  )
}

export default Modal
