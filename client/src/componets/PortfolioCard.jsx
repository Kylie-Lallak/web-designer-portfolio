import React from 'react'
import '../styles/portfolioCard.css';
import KnoIcon from '../images/knowlexIcon.png';
import KnoImage from '../images/knowlexImage.png';

export default function PortfolioCard({ name, description, logo, image }) {
  return (

    <div id='card' className='max-w-96 lg:max-w-lg'>

      <div id='card-top' className='my-8 mx-8'>

        <img className='max-w-20' src={logo} />
        <h1 className='text-3xl font-semibold'>{name}</h1>

        <p className='text-slate-500 leading-relaxed mt-5 max-w-lg'>{description}</p>


      </div>
      <div id='card-bottom'>
        <img src={image} id='card-image' />

      </div>



    </div>



  )
}
