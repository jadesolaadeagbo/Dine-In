import React from 'react'
import Bckg from "../assets/food-bg.jpg"

const Home = () => {
  return (
    <div>
      <h1 className='pt-5 pb-5 text-red-600 text-4xl font-bold text-center border'>
        Dine-In
      </h1>
      <img src={Bckg} className="absolute"/>
      <div>
        
        <h1 className='relative top-30 font-bold text-red-600 text-6xl'> Find a Recipe</h1>
      </div>
      
    </div>
  )
}

export default Home
