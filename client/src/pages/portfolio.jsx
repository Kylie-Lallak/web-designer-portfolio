import React from 'react'
import '../styles/portfolio.css';
import Card from '../componets/PortfolioCard';
import portfolioCards from '../componets/portfolioCards';
import { Link } from 'react-router-dom';

export default function portfolio() {
  return (
    <>
      <div id='port-header'>
        <h1 className=' font-semibold text-center text-4xl sm:text-6xl pt-16'>See my Work</h1>
        <p className=' mx-24 mt-4 text-center sm:mx-32 text-gray-600'> Check out my portfolio. If something sparks your interest, let's connect.</p>


      </div>

      <div id='card-container' className='mt-14 flex flex-col items-center gap-7 sm:flex-wrap sm:flex-row sm:items-center sm:justify-center'>
        {portfolioCards.map((card, i) => (
          <Card key={i} name={card.name} description={card.description} image={card.image} logo={card.logo} alt={card.alt}/>
        ))}

      </div>


      <div id='about-contact' className='pb-14 pt-10'>
        <h1 className='mb-10 font-semibold text-center text-4xl sm:text-6xl mt-12 '>Like what you see?</h1>
        <h3 className='mb-10 mx-12 sm:mx-20 md:mx-32 text-gray-600  text-center text-lg  mt-12  '>Let’s bring your vision to life! Whether you have a project in mind or just want to chat about ideas, I’d love to hear from you. </h3>


        <div id='about-contact-buttons' className='flex flex-row gap-4 justify-center sm:gap-5'>


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
