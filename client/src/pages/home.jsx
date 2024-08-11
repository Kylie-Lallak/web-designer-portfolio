import React from 'react'
import Headshot from '../images/headshot-uiux-2.png';
import '../styles/home.css'; 

export default function home() {
  return (
    <div id='background'>
      <div id='header' className='flex flex-col justify-center items-center text-center'>

        <h2 id="header-intro">Hi I'm Jane Doe</h2>

        <div id="header-main-text">
        and I'm a UI/UX Designer
        </div>

        <p> I make great and awesome stuff for cool cleintes and i make it well an good and awesome and i do a good job</p>
        
        <button> Learn More</button>

      </div>
 
    </div>
  )
}
