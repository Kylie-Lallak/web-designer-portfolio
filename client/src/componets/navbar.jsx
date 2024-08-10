import React from 'react';
import '../styles/navbar.css'; // Correct relative path from components to styles
import { Link } from 'react-router-dom';




export default function navbar() {
  return (
    <nav className='flex justify-between items-center w-[92%] mx-auto'>
        <h1>
            Portfolio
        </h1>

        <div className='md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[9%] md:w-auto w-full flex items-center px-5 '>
            <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                <Link to='/'> <li>Home</li> </Link> 
                <Link to='/about'> <li>About</li> </Link>   
                <Link to='/skills'> <li>Skills</li> </Link>  
                <Link to='/portfolio'> <li>Portfolio</li> </Link> 
                <Link to='/contact'> <li>Contact</li> </Link> 
            </ul>
        </div>

    </nav>

  )
}
