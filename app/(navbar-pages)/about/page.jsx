import React, { Fragment } from 'react';
import "./../../../styles/globals.css";
import { PiPlayPauseFill } from "react-icons/pi";
import { IoMdClock } from "react-icons/io";
import { BsWindowDash } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";

const About = () => {
  return (
    <Fragment>
      {/* Section One */}
      <section className='grid grid-cols-2 gap-0 m-5 p-5'>
        <div>
          <img
            src="https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food"
            style={{ width: "500px", height: "450px" }}
            className='rounded-3xl'
          />
        </div>

        <div className='flex flex-col gap-5 p-5'>
          <h1 className='text-3xl font-bold font-marienda'>We Provide Healthy Food For Your Family.</h1>
          <p className='font-bold font-serif'>
            Our story began with a vision to create a unique dining experience that merges fine dining,
            exceptional service, and a vibrant ambiance. Rooted in the city's rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </p>
          <p>
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff,
            renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
      </section>

      {/* Section Two */}
      <section className='relative'>
        <img
          src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="restaurant"
          className='w-full opacity-30'
          style={{ maxWidth: '100%', maxHeight: '700px', objectFit: 'cover' }}
        />
        <div className='absolute inset-0 flex items-center justify-center flex-col gap-2 text-3xl font-black z-10'>
          <span>
            <PiPlayPauseFill className='text-8xl bg-red-800 rounded-3xl p-2 text-gray-200 shadow-2xl' />
          </span>
          <p className='font-marienda text-4xl mt-3'>Feel The Authentic & Original Taste From Us</p>
        </div>

        <div className='grid grid-cols-3 gap-7 m-5 p-5'>
          {/* Left Side */}
          <div className='flex items-center gap-3'>
            <IoMdClock className='text-5xl text-red-900' />
            <div>
              <h1 className='font-extrabold font-mono text-xl'>Fast Delivery</h1>
              <p>In the new era of technology, we look to the future with certainty.</p>
            </div>
          </div>

          {/* Mid Side */}
          <div className='flex items-center gap-3'>
            <BsWindowDash className='text-5xl text-red-900' />
            <div>
              <h1 className='font-extrabold font-mono text-xl'>Easy To Order</h1>
              <p>In the new era of technology, we look to the future with certainty.</p>
            </div>
          </div>

          {/* Right Side */}
          <div className='flex items-center gap-3'>
            <RiTodoLine className='text-5xl text-red-900' />
            <div>
              <h1 className='font-extrabold font-mono text-xl'>Multi Cuisine</h1>
              <p>In the new era of technology, we look to the future with certainty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Three */}
      <section className='grid grid-cols-2 bg-gray-200'>
       
      </section>

      {/* Section Four */}
      <section>
        <div className='p-7'>
          <h1 className='font-bold text-4xl text-center font-marienda'>What Our Customers Say..</h1>

          <div className='flex justify-around mt-5'>
            {/* Right Side */}
            <div className='flex flex-col gap-5 border bg-gray-300 rounded-xl' style={{ width: "300px" }}>
              <h1 className='font-bold text-red-800 text-xl mb-3 p-2'> "The Best Restaurant" </h1>
              <p className='border-b-2 p-3'>Last night, we dined at place and were simply blown away. From the moment we stepped in,
                we were enveloped in an inviting atmosphere and greeted with warm smiles.
              </p>

              {/* Profile Details */}
              <div className='grid grid-cols-2 p-3'>
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className='rounded-full'
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <h1 className='font-bold'>Jason Statham</h1>
                  <span>Los Angeles, US</span>
                </div>
              </div>
            </div>

            {/* Middle Side */}
            <div className='flex flex-col gap-5 border bg-gray-300 rounded-xl' style={{ width: "300px" }}>
              <h1 className='font-bold text-red-800 text-xl mb-3 p-2'> "The Best Restaurant" </h1>
              <p className='border-b-2 p-3'>Last night, we dined at place and were simply blown away. From the moment we stepped in,
                we were enveloped in an inviting atmosphere and greeted with warm smiles.
              </p>

              {/* Profile Details */}
              <div className='grid grid-cols-2 p-3'>
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className='rounded-full'
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <h1 className='font-bold'>Jason Statham</h1>
                  <span>Los Angeles, US</span>
                </div>
              </div>
            </div>

            {/* Left Side */}
            <div className='flex flex-col gap-5 border bg-gray-300 rounded-xl' style={{ width: "300px" }}>
              <h1 className='font-bold text-red-800 text-xl mb-3 p-2'> "The Best Restaurant" </h1>
              <p className='border-b-2 p-3'>Last night, we dined at place and were simply blown away. From the moment we stepped in,
                we were enveloped in an inviting atmosphere and greeted with warm smiles.
              </p>

              {/* Profile Details */}
              <div className='grid grid-cols-2 p-3'>
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className='rounded-full'
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <h1 className='font-bold'>Jason Statham</h1>
                  <span>Los Angeles, US</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
