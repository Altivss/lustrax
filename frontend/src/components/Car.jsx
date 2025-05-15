import React from 'react'
import { assets } from '../assets/assets'

const Car = () => {
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <h1 className='text-yellow-700 font-medium'>Car Care</h1>
        </div>
        <div className=' text-center grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-4 gap-y-6'>
        <span> <img src={assets.PPF} alt="" /> PPF</span>
         <span> <img src={assets.tint} alt="" /> Tint</span>
           <span><img src={assets.Microfiber} alt="" />Microfiber</span>
          <span><img src={assets.ceramic} alt="" /> Ceramic</span>
           <span><img src={assets.lubricants} alt="" />Lubricants</span>
          <span><img src={assets.Polishing} alt="" /> Polishing</span>
        </div>
        
    </div>
  )
}

export default Car