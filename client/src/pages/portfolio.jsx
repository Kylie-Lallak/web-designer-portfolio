import React from 'react'
import '../styles/portfolio.css';
import Card from '../componets/PortfolioCard';

export default function portfolio() {
  return (
    <>
      <div id='port-header'>
        <h1 className=' font-semibold text-center text-4xl sm:text-6xl pt-10'>See my Work</h1>
        <p className=' mx-24 mt-4 text-center sm:mx-32 text-gray-600'> Check out my portfolio. If something sparks your interest, let's connect.</p>


      </div>

      <div id='card-container' className='mt-14 flex flex-col items-center gap-7 sm:flex-wrap sm:flex-row sm:items-center sm:justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />

      </div>


    </>

  )
}
