import React from 'react'
import { assets } from '../assets/assets'

const Car = () => {
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <h1 className='text-white-700 font-medium'>Car Care</h1>
        </div>
       <div className="text-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
  {/* PPF */}
  <div>
    <div className="aspect-square w-full mt-5">
      <img src={assets.PPF} className="w-full h-full object-cover rounded-xl" alt="PPF" />
    </div>
    <p className="font-semibold text-2xl mt-2">PPF (Paint Protection Film)</p>
  </div>

  {/* Tint */}
  <div>
    <div className="aspect-square w-full mt-5">
      <img src={assets.tint} className="w-full h-full object-cover rounded-xl" alt="Tint" />
    </div>
    <p className="font-semibold text-2xl mt-2">Tint</p>
  </div>

  {/* Microfiber */}
  <div>
    <div className="aspect-square w-full mt-5">
      <img src={assets.Microfiber} className="w-full h-full object-cover rounded-xl" alt="Microfiber" />
    </div>
    <p className="font-semibold text-2xl mt-2">Microfiber</p>
  </div>

  {/* Ceramic */}
  <div>
    <div className="aspect-square w-full mt-5">
      <img src={assets.ceramic} className="w-full h-full object-cover rounded-xl" alt="Ceramic" />
    </div>
    <p className="font-semibold text-2xl mt-2">Ceramic</p>
  </div>

  {/* Lubricants */}
  <div>
    <div className="aspect-square w-full mt-5">
      <img src={assets.lubricants} className="w-full h-full object-cover rounded-xl" alt="Lubricants" />
    </div>
    <p className="font-semibold text-2xl mt-2">Lubricants</p>
  </div>

  {/* Polishing */}
  <div>
    <div className="aspect-square w-full mt-5">
      <img src={assets.Polishing} className="w-full h-full object-cover rounded-xl" alt="Polishing" />
    </div>
    <p className="font-semibold text-2xl mt-2">Polishing</p>
  </div>
</div>

        
    </div>
  )
}

export default Car