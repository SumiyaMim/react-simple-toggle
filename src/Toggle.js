import React, { useState } from 'react'
import "./Toggle.css"

const Toggle = () => {

    const [toggle, setToggle] = useState(true)
    // alert(toggle)

  return (
    <div className='container'>
     {toggle && (
         <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing 
         industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in 
         the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
     )}
      <div>
        <button className='button' onClick={()=>{setToggle(!toggle)}}>
            {toggle ? "Hide" : "Show"}
        </button>
        {/* <button onClick={()=>{setToggle(true)}}>Show</button>
        <button onClick={()=>{setToggle(false)}}>Hide</button> */}
      </div>
    </div>
  )
}

export default Toggle
