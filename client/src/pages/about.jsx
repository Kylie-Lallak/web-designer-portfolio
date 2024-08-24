import React from 'react';
import '../styles/about.css';
import { Link } from 'react-router-dom';

import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';

export default function about() {
  return (
    <>
      <div id='about-header' className='' >

        <div id='about-header-title' className='text-center pt-11 text-2xl' >

             <span className='font-bold'> - About me -</span>
         </div>
         <div id='about-header-box' className='bg-white bg-opacity-50 mt-5  mx-auto rounded-md shadow-md font-light'>
        
         As a professional UI/UX developer, I design modern websites that captivate and engage users. I combine aesthetics with functionality and work closely with developers and designers to bring client visions to life.

         </div>

      </div>

      <div id='about-services-section '>

        <h1 className='mb-10 font-semibold text-center text-4xl sm:text-6xl mt-12'> My Services</h1>
    
    
    <div id='card-container' className='gap-5 flex flex-col justify-center items-center lg:flex-row'>

 
        <div className='shadow-2xl about-card'>
          <div className='about-card-top'>
          <img className='about-image' src={about1}></img>

          </div>
         
          <h2 className='about-box-card-title'>Front End Development</h2>
          <p className='about-card-main-text'> I’ll help you to bridge the gap between design and development.</p>

        </div>


        <div className='shadow-2xl about-card'>
          <div className='about-card-top'>
          <img className='about-image' src={about2}></img>

          </div>
         
          <h2 className='about-box-card-title'> Corprate Sites</h2>
          <p className='about-card-main-text'>  I’ll unite products and users, design and experiences.</p>

        </div>


        <div className='shadow-2xl about-card'>
          <div className='about-card-top'>
          <img className='about-image' src={about3}></img>

          </div>
         
          <h2 className='about-box-card-title'>Mobile App Design</h2>
          <p className='about-card-main-text'> Using iOS, Android and an expert vision, I’ll take your application to the next level.

</p>

        </div>

        </div>


      </div>

      <div id='about-principles-section' className='pb-20'>


        <h1 id='about-principles-title' className='mb-10 font-semibold text-center text-4xl sm:text-6xl mt-14 pt-9 '>My Principles </h1>

      <div id='about-principles-card-container' className=' mx-auto flex flex-col  justify-center items-center sm:flex-row sm:flex-wrap sm:gap-5'>
            <div  className='about-principles-card bg-white bg-opacity-50 mt-5  rounded-md shadow-xl font-light'>
              <h1 className='about-principles-card-title '>UX is the sum of all things.</h1>
              <p>There’s no style over substance here. I bring together form and the function to create something that looks good and performs brilliantly. Simple.</p>

            </div>

            <div  className='about-principles-card bg-white bg-opacity-50 mt-5  rounded-md shadow-xl font-light'>
              <h1 className='about-principles-card-title '>Perfection doesn’t do a 9-­5.</h1>
              <p>And neither do I. I’m not bound to any time zones or tied to a desk. The project dictates where I need to be and who I need to collaborate with. Essentially, I always go the extra mile.</p>

            </div>

            <div  className='about-principles-card bg-white bg-opacity-50 mt-5  rounded-md shadow-xl font-light'>
              <h1 className='about-principles-card-title '>Clients. Curated.</h1>
              <p>I take on a limited number of projects at one time. This quality control means I can give each one exactly what it needs – focus and time. </p>
            </div>

            <div  className='about-principles-card bg-white bg-opacity-50 mt-5   rounded-md shadow-xl font-light'>
              <h1 className='about-principles-card-title '>Creator. Partner. Collaborator.</h1>
              <p>Ideas are far from linear. As designer and developer, I can spearhead, support or polish your project or product at any stage it needs it. </p>
            </div>

            <div  className='about-principles-card bg-white bg-opacity-50 mt-5  rounded-md shadow-xl font-light '>
              <h1 className='about-principles-card-title '>Clean ­– In thinking, in style.</h1>
              <p>Simple, minimal and effective. This is my mantra and method. Clean code, fuss-free interfaces and expert execution, design as it should be. </p>
            </div>
       </div>



      </div>

      <div id='about-contact' className='pb-14 pt-10'>
        <h1 className='mb-10 font-semibold text-center text-4xl sm:text-6xl mt-12 '>Ready to get started?</h1>
        <h3 className='mb-10 font-semibold text-center text-lg  mt-12  '>You know about me, let’s talk about you.</h3>
       
       
        <div id='about-contact-buttons' className='flex flex-row gap-4 justify-center sm:gap-5'>
        <Link to='/portfolio'><button className="mt-6 shadow-md rounded-2xl border-2 border-dashed border-black bg-white py-4 px-4 sm:px-12 sm:py-6 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
           Check out my work
              </button>
       </Link>

       <Link to='/contact'><button className="mt-6 shadow-md rounded-2xl border-2 border-dashed border-black bg-white px-4 py-4 sm:px-12 sm:py-6 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
           Shoot me a message
              </button>
       </Link>


        </div>


      </div>

      <div class=" ml-16 mr-16 h-px bg-gray-300 my-4 sm:ml-24 sm:mr-24"></div>

  
   
    </>
  )
}
