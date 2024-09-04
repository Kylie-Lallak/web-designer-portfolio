import React from 'react'
import '../styles/portfolioCard.css';
import KnoIcon from '../images/knowlexIcon.png';
import KnoImage from '../images/knowlexImage.png';

export default function PortfolioCard() {
  return (

    <div id='card' className='max-w-96 lg:max-w-lg'>

      <div id='card-top' className='my-8 mx-8'>

        <img className='max-w-20' src={KnoIcon} />
        <h1 className='text-3xl font-semibold'>Company Name </h1>

        <p className='text-slate-500 leading-relaxed mt-5 max-w-lg' > End to end application for Edtech industry. Knowlex is a platform where to exchange knowledge for other knowledge.  </p>


      </div>
      <div id='card-bottom'>
        <img src={KnoImage} id='card-image' />

      </div>



    </div>



  )
}
