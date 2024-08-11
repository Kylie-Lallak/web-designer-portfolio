import React from 'react'
import Phone from '../images/iphone.png';
import '../styles/home.css'; 

export default function home() {
  return (
    <div id='background' className='flex'>

      <div id='header' className='flex-col  '>

       
        <h1 id="header-intro">Hi Im Jane Doe,</h1>
        <div id="header-main-text">
        and I'm a <span className='font-bold'>UI/UX Designer</span>
        </div>

        <p className='max-w-md'> I'm a UI/UX designer passionate about creating intuitive and visually compelling digital experiences. I focus on crafting functional, aesthetically pleasing interfaces that enhance user interactions.</p>
      
      <button id='home-button'className='shadow-lg'>Learn More</button>

    
      

      </div>
      <img id="phone"src={Phone}></img>
    
      

 
    </div>
  )
}
