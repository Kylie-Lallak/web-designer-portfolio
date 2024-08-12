import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);

    const MenuIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );


    const CloseIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6M6 6l12 12" />
        </svg>
    );

    

    return (
        <nav className=' flex justify-between items-center w-[92%] mx-auto'>
            <h1>
                Portfolio
            </h1>


            <div className={`md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5 ${showNavbar ? 'top-[9%]' : 'top-[-100%]'}`}>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                    <Link to='/'> <li>Home</li> </Link>
                    <Link to='/about'> <li>About</li> </Link>
                    <Link to='/skills'> <li>Skills</li> </Link>
                    <Link to='/portfolio'> <li>Portfolio</li> </Link>
                    <Link to='/contact'> <li>Contact</li> </Link>
                </ul>
            </div>
            <div className='cursor-pointer md:hidden' onClick={() => setShowNavbar(prev => !prev)}>

                <MenuIcon />

            </div>


        </nav>


    )
}
