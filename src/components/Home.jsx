import React from 'react'
import Bckg from "../assets/food-bg.jpg"

const Home = () => {
  return (
    <div className='font-sourceserif'>
      <h1 className='pt-5 pb-5 text-red-600 text-4xl font-bold text-center bg-yellow-50'>
        Dine-In
      </h1>
      <img src={Bckg} className="absolute"/>
      <div className='flex flex-col gap-20 items-center relative top-40'>
        
        <h1 className=' top-30 font-bold text-red-600 text-6xl'> Find a Recipe</h1>
        
        <div className='w-1/2'> 
        <input type="search" placeholder='What Recipe are you looking for?' 
        className='border h-20 w-full pl-10 text-xl pr-5'/>
        
        </div>

      </div>
      
    </div>
  )
}

export default Home
