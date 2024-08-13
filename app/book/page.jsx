import React, { Fragment } from 'react'
import "./../../styles/globals.css"

const book = () => {
  return (
    <Fragment>
        <section>
          <div className='flex flex-col justify-center text-center'>
              <h1 className='text-4xl font-bold font-marienda text-center p-3'>Book A Table</h1>
              <p className='text-center p-3'>we consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
          </div>
          <div className='m-5 p-5 flex justify-center text-center bg-gray-200' >
            <form style={{width: "700px", height: "auto"}} className='grid grid-cols-4 grid-rows-2 border-black border-2 p-5 rounded-xl shadow-xl bg-white'>
              <label htmlFor="" className='m-2 p-2 font-bold text-lg font-mono'>Date</label>
              <input type="date" placeholder='put your date' className='border-black border-2 p-2 rounded-full m-2' />

              <label htmlFor="" className='m-2 p-2 font-bold text-lg font-mono'>Time</label>
              <input type="time" className='border-black border-2 p-2 rounded-full m-2' />

              <label htmlFor="" className='m-2 p-2 font-bold text-lg font-mono'>Name</label>
              <input type="text" className='border-black border-2 p-2 rounded-full m-2' />

              <label htmlFor="" className='m-2 p-2 font-bold text-lg font-mono'>Phone</label>
              <input type="text" className='border-black border-2 p-2 rounded-full m-2' />

              <label htmlFor="" className='grid col-span-2 m-2 p-2 font-bold text-lg font-mono'>Total Person</label>
              <input type="text" className='border-black border-2 p-2 rounded-full m-2' style={{width: "300px"}} />

              <button className='grid col-span-2 border-black bg-red-900 text-white rounded-full p-2 text-xl hover:bg-slate-600'>Book A table</button>
            </form>
          </div>
        </section>
    </Fragment>
  )
}

export default book