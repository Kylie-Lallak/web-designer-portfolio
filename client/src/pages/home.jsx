import React from 'react'
import Phone from '../images/iphone.png';
import '../styles/home.css'; 
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <div id='background' className='flex flex-col sm:flex-row'>

      <div id='header' className='mt-8 text-center justify-center sm:text-left sm:ml-12 sm:mt-24'>

       
        <h1 id="header-intro">Hi Im Jane Doe,</h1>
        <div id="header-main-text">
        and I'm a <span className='font-bold'>UI/UX Designer</span>
        </div>

       
      
      <Link to='/about'> <button id='home-button'className='shadow-xl'>Learn More</button> </Link>

    
      

      </div>
      <img id="phone"src={Phone} className='mx-auto'></img>
    
      

 
    </div>
  )
}
