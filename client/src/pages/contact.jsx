import React from 'react';
import '../styles/contact.css';
import Phone from '../images/phone.png'

export default function contact() {
  return (
<>
    <div id='contact-page-header' className='absolute'>
    
    </div>
    <div id='contact-header-text'>

        <h1 id='contact-h1 'className=' font-semibold text-center text-4xl sm:text-6xl mt-12'>Let's Talk</h1>
        <p className=' mx-8 mt-4 text-center sm:mx-32 text-gray-600'>If you have a project in mind or are simply interested in finding out more, get in touch and let’s get things moving.</p>

    </div>

    <div id='contact-card-container'>
        <div className='contact-card'>
          <div className='contact-img-container '> <img src={Phone} className='contact-img'/> </div>
          <h1>Call Me</h1>
          <p>I'd love to talk—give me a call at</p>
          <p>(555) 123-4567</p>

        </div>


    </div>
   
     

   

   

      

 </>
  )
}
