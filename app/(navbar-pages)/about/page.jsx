import React, { Fragment } from 'react'
import "./../../../styles/globals.css"
import { PiPlayPauseFill } from "react-icons/pi";
import { IoMdClock } from "react-icons/io";
import { BsWindowDash } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";

const about = () => {
  return (
    <Fragment>
       {/* Section One */}
       <section className='grid grid-cols-2 gap-0 m-5 p-5 '>
        
        <div>

          <img 
          src="https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="food"
          style={{width: "500px", height: "450px"}}
          className='rounded-3xl m-5' />

        </div>

        <div className='m-5 p-5 flex flex-col gap-5'>
          <h1 className='text-3xl font-bold font-marienda'>We Provide Healthy Food For Your Family.</h1>
          <p className='font-bold font-serif'>Our story began with a vision to create a unique dining experience that merges fine dining, 
            exeptional service and a vibrant ambiance, Rooted in city's rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </p>
          <p className=''>
            At place, we believe that dining is not just about food, but also about the overall expreience. Out staff,
            renowned for thier warmth and dedication, strives to make every visit an unforgettable event.
          </p>
          
        </div>

       </section>

       {/* Section Two */}
       <section className='grid grid-rows-2 mb-0'>

        <div className='relative flex justify-center text-center'>
          <img 
          src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="restaurant"
          className='z-0 w-full opacity-30'
          style={{ maxWidth: '100%', maxHeight: '700px', objectFit: 'cover' }} />

          <div className='absolute inset-0 flex items-center justify-center flex-col gap-2 text-3xl font-black z-10'>
             <span>
                 <PiPlayPauseFill className='text-8xl bg-red-800 rounded-3xl p-2 text-gray-200 shadow-2xl' />
             </span>
             <p className='font-marienda text-4xl mt-3 '>Feel The Authentic & Original Taste From US</p>
          </div>

        </div>



        <div className='grid grid-cols-3 gap-7 m-5 p-5'>

          {/* Left Side */}
          <div className='flex flex-row gap-3 mt-3'>
            <div>
              <IoMdClock className='text-5xl m-2 text-red-900' />
            </div>
            <div>
              <h1 className='font-extrabold font-mono text-xl '>Fast Delivery</h1>
              <p>in the new era of technology we look in the future with certainty life.</p>
            </div>
          </div>

        {/* Mid Side */}
          <div className='flex flex-row gap-3 mt-3'>
            <div>
              <BsWindowDash className='text-5xl m-2 text-red-900' />
            </div>
            <div>
              <h1 className='font-extrabold font-mono text-xl '>Easy To Order</h1>
              <p>in the new era of technology we look in the future with certainty life.</p>
            </div>
          </div>

        {/* Right Side */}
          <div className='flex flex-row gap-3 mt-3'>
          <div>
            <RiTodoLine className='text-5xl m-2 text-red-900' />
          </div>
          <div>
            <h1 className='font-extrabold font-mono text-xl '>Multi Cuisine</h1>
            <p>in the new era of technology we look in the future with certainty life.</p>
          </div>

          </div>

        </div>


        {/* Section Three */}

        <section className='grid grid-cols-2 bg-gray-200 mb-0'>
          <div className='grid grid-rows-2 gap-5'>

            {/* Left Side */}
            <div>
              <h1>A little information for our valuable guest</h1>
              <p>
                at place, we believe that dining is not just about food, but also about the 
                overall expreience. Our Staff, renowned for thier warmth and dedication,
                strives to make every visit an unforgettable event.
              </p>
            </div>

            <div className='grid grid-rows-2'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>


          {/* Right Side */}
          <div></div>

        </section>

       </section>

       {/* Section Four */}
       <section>
       <div className='p-7'>
      <h1 className='font-bold text-4xl text-center font-mono p-7'>What Our Customers Say..</h1>

      <div className='flex flex-row justify-around mt-5'>
        {/* Right Side */}
        <div className='flex flex-col gap-5 border bg-gray-300 rounded-xl' style={{width: "300px"}}>
          <h1 className='font-bold text-red-800 text-xl mb-3 p-2'> "The Best Restaurant" </h1>
          <p className='border-b-2 p-3'>Last night, we dined at place and were simply blown away. From The Moment We Stepped In,
            we were inveloped in an inviting atmosphere and greeted with warm smiles
          </p>
          
          {/* Profile Detailes */}
          <div className='grid grid-cols-2 p-3'>
            <img 
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt=""
            style={{width: "100px", height: "100px"}}
            className='rounded-full' />
            <div>
              <h1 className='font-bold '>Jason Statham</h1>
              <span>Los Anglos, US</span>
            </div>
          </div>
        </div>

        {/* Middle Side */}
        <div className='flex flex-col gap-5 border bg-gray-300 rounded-xl' style={{width: "300px"}}>
          <h1 className='font-bold text-red-800 text-xl mb-3 p-2'> "The Best Restaurant" </h1>
          <p className='border-b-2 p-3'>Last night, we dined at place and were simply blown away. From The Moment We Stepped In,
            we were inveloped in an inviting atmosphere and greeted with warm smiles
          </p>
          
          {/* Profile Detailes */}
          <div className='grid grid-cols-2 p-3'>
            <img 
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt=""
            style={{width: "100px", height: "100px"}}
            className='rounded-full' />
            <div>
              <h1 className='font-bold '>Jason Statham</h1>
              <span>Los Anglos, US</span>
            </div>
          </div>
        </div>


        {/* Left Side */}
        <div className='flex flex-col gap-5 border bg-gray-300 rounded-xl' style={{width: "300px"}}>
          <h1 className='font-bold text-red-800 text-xl mb-3 p-2'> "The Best Restaurant" </h1>
          <p className='border-b-2 p-3'>Last night, we dined at place and were simply blown away. From The Moment We Stepped In,
            we were inveloped in an inviting atmosphere and greeted with warm smiles
          </p>
          
          {/* Profile Detailes */}
          <div className='grid grid-cols-2 p-3'>
            <img 
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt=""
            style={{width: "100px", height: "100px"}}
            className='rounded-full' />
            <div>
              <h1 className='font-bold '>Jason Statham</h1>
              <span>Los Anglos, US</span>
            </div>
          </div>
        </div>

      </div>
    </div>
       </section>
    </Fragment>
  )
}

export default about