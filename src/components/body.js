import React from 'react'
import bg from '../images/bg1.png'

export default function body() {

    let myImage = {
        
        width: '1920px',
        height: '597px', 
        left: '0px',
        top: '0px'
       
        

    }
  return (
    <div style={myImage}>
        <img src={bg} alt="/" />
 
    </div>
    
  )
}
