import React from 'react'
import Phone from '../images/iphone.png';
import '../styles/home.css'; 
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <div id='background' className='flex flex-col sm:flex-row'>

      <div id='header' className='mt-8 text-center justify-center sm:text-left sm:ml-12 sm:mt-24'>

       
        <h1 id="header-intro" className=''>Hi Im Jane Doe,</h1>
        <div id="header-main-text">
        and I'm a <span className='font-bold'>UI/UX Designer</span>
        </div>

       
      
      <Link to='/about'><button className="mt-6 shadow-md rounded-2xl border-2 border-dashed border-black bg-white px-12 py-6 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Learn More
    </button>
     </Link>
      
      

      </div>
      <img id="phone"src={Phone} className='mx-auto'></img>
    
      

 
    </div>
  )
}
