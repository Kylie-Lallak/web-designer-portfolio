import React from 'react';

import Linkedin from '/images/LinkedinIcon.png';
import Facebook from '/images/FacebookIcon.png';
import Twitter from '/images/TwitterIcon.png';


export default function Footer() {
  return (

    <>

      <div className='flex flex-row flex-wrap gap-7 items-center justify-center pt-5 pb-5 sm:gap-9 md:justify-around' id='footer'>


        <h1 className='font-bold text-lg '>Portfolio.</h1>
        <h4 className='text-sm text-slate-500'>© 2024 Kylie Lallak. All Rights Reserved</h4>

        <div className='flex flex-row gap-4 items-center justify-center'>
          <a href='https://x.com/' target="_blank">   <img src={Twitter} alt='twitter logo' className='hover:scale-125' /> </a>
          <a href='https://www.linkedin.com/' target="_blank">   <img src={Linkedin} alt='linked in logo' className='hover:scale-125' /> </a>
          <a href='https://www.facebook.com/' target="_blank"> <img src={Facebook} alt='facebook logo' className='hover:scale-125' /></a>
        </div>
      </div>

    </>
  )
}
