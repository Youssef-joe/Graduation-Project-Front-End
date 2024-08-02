import React, { Fragment } from 'react'
import "./../styles/globals.css"

const page = () => {
  return (
    <Fragment>
      <div className='relative flex justify-center'>
        <img
          src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Food"
          className='z-0 w-full'
          style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'cover' }}
        /> 
        <div className='absolute inset-0 flex items-center justify-center flex-col gap-2'>
          <h1 className='text-white text-7xl font-bold text-black font-mono text-center'
              style={{maxWidth: '500px'}}>
            Best Food For Your Test
          </h1>
          <p className='from-neutral-600 font-serif text-center mt-2'
              style={{maxWidth: '400px'}}>Discover delectable cuisine and unforgettable moments in our welcoming, culinary heaven</p>


          <div className='flex flex-row justify-center gap-5 mt-5'>
              <button className='bg-red-800 p-4 rounded-3xl text-white hover:bg-red-600'>Book A Table</button>
              <button className='bg-white p-4 rounded-3xl hover:bg-slate-200'>Explore Menu</button>
          </div>


        </div>
      </div>
    </Fragment>
  )
}

export default page
