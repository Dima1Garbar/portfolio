import React from 'react'
import Logos from './Logos'
import { useState } from 'react'

const Counter = () => {

  const list_images  = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
  ]

    const [count, setCount] = useState(0)

    function increment() {
        const isLastSlide = count === list_images.length -1;
        const newIndex = isLastSlide ? 0 : count +1;
        setCount(newIndex);
    }

    function decrement() {
        const isFirstSlide = count === 0;
        const newIndex = isFirstSlide ? list_images.length -1 : count -1;
        setCount(newIndex);
    }


    return (
        <div className='studied'>
            <button className='arrow_button left' onClick={decrement}>
                <svg className="bi about_bi  bi-arrow-left " viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
            </button>
            <Logos count={count} list_images={list_images}/>    
            <button className='arrow_button right test' onClick={increment}>
                <svg  className="bi about_bi bi-arrow-right" viewBox="0 0 16 16" >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>

            </button>
        </div>
        )
    }

export default Counter
