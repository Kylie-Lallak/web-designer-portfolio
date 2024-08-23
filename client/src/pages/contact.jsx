import React from 'react';
import '../styles/contact.css';
import Phone from '../images/phone.png'
import Email from '../images/email.png'
import Text from '../images/text.png'
export default function contact() {
  return (
<>
    <div id='contact-page-header' className='absolute h-[115vh] sm:h-[85vh] md:h-[70vh]'>
    
    </div>
    <div id='contact-header-text'>

        <h1 id='contact-h1 'className=' font-semibold text-center text-4xl sm:text-6xl mt-12'>Let's Talk</h1>
        <p className=' mx-24 mt-4 text-center sm:mx-32 text-gray-600'>If you have a project in mind, get in touch and let’s get things moving.</p>

    </div>

    <div id='contact-card-container' className='flex flex-col justify-center items-center sm:flex-wrap sm:flex-row sm:gap-6'>

        <div className='contact-card mt-16'>
          <div className='contact-img-container '> <img src={Phone} className='contact-img '/> </div>
          <h1 className='contact-card-h1'>Call Me</h1> 
          <p className='contact-card-p '>I'd love to talk, call me at</p>
         <p className='contact-card-p2'>(555) 123-4567</p> 
        </div>

        <div className='contact-card mt-16'>
        <a href='mailto:janedoe@gmail.com' target="_blank" id='contact-email-button'>   <div className='contact-img-container'> <img src={Email} className='contact-img '/> </div> </a>
        <h1 className='contact-card-h1'>Email Me</h1> 
          <p className='contact-card-p '>Message me at</p>
          <p className='contact-card-p2'>JaneDoe@gmail.com</p> 
        </div>

        <div className='contact-card mt-16'>
          <div className='contact-img-container'> <img src={Text} className='contact-img '/> </div>
          <h1 className='contact-card-h1'>Text Me</h1> 
          <p className='contact-card-p '>Shoot me a text at</p>
         <p className='contact-card-p2'>(555) 123-4567</p> 
        </div>




    </div>


    <div class=" ml-16 mr-16 h-px bg-gray-400 my-4 sm:ml-24 sm:mr-24"></div>
   
     

   

   

      

 </>
  )
}
