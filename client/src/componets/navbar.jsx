import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {




    return (
        <nav className=' pb-4 flex justify-between items-center w-[92%] mx-auto' id='nav'>
            <h1 className='font-bold text-lg'>
                Portfolio
            </h1>


            <div>
                <ul className=' text-base sm:text-lg flex  flex-row gap-4 sm:gap-9 md:gap-14 lg:gap-16'>
                    <Link to='/'> <li className='hover:text-gray-400'>Home</li> </Link>
                    <Link to='/about'> <li className='hover:text-gray-400'>About</li> </Link>

                    <Link to='/portfolio'> <li className='hover:text-gray-400'>Portfolio</li> </Link>
                    <Link to='/contact'> <li className='hover:text-gray-400'>Contact</li> </Link>
                </ul>
            </div>



        </nav>


    )
}
