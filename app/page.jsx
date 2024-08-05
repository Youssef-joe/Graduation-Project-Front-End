import React, { Fragment } from 'react'
import "./../styles/globals.css"
import { GiCoffeeCup } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinks2Line } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
import { FaClock } from "react-icons/fa6";
import { MdLocalOffer } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';

const page = () => {
  return (
    <Fragment>

      {/* Section One */}
      <div className='relative flex justify-center'>
        <img
          src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Food"
          className='z-0 w-full'
          style={{ maxWidth: '100%', maxHeight: '500px', objectFit: 'cover' }}
        /> 
        <div className='absolute inset-0 flex items-center justify-center flex-col gap-2'>
          <h1 className='text-7xl font-bold text-black font-mono text-center'
              style={{maxWidth: '500px'}}>
            Best Food For Your Test
          </h1>
          <p className='from-neutral-600 font-serif text-center mt-2'
              style={{maxWidth: '400px'}}>Discover delectable cuisine and unforgettable moments in our welcoming, culinary heaven</p>


          <div className='flex flex-row justify-center gap-5 mt-5'>
              <Link className='bg-red-800 p-4 rounded-3xl text-white hover:bg-red-600' href='/book'>Book A Table</Link>
              <Link className='bg-white p-4 rounded-3xl hover:bg-slate-200' href='/menu'>Explore Menu</Link>
          </div>


        </div>
      </div>


{/* Section two  */}
      <div className=''>
        <h1 className='flex justify-center text-center p-4 text-4xl font-bold font-serif'>Browse Our Menu</h1>

        <div className='flex flex-row justify-around text-center m-2 p-2'>

            <div className='border grid grid-rows-3 justify-center text-center p-4 m-3'>
              <span className='flex justify-center text-center mt-4'><GiCoffeeCup className='text-7xl bg-slate-400 rounded-full p-3'/></span>
              <h1 className='font-bold text-2xl mt-2'>Breakfast</h1>
              <p>in the era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#" className='text-red-700 font-bold font-mono'>Explore Menu</a>
            </div>

            <div className='border grid grid-rows-3 justify-center text-center p-4 m-3'>
              <span className='flex justify-center text-center mt-4'><FaBowlFood className='text-7xl bg-slate-400 rounded-full p-3'/></span>
              <h1 className='font-bold text-2xl mt-2'>Main Dishes</h1>
              <p>in the era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#" className='text-red-700 font-bold font-mono'>Explore Menu</a>
            </div>

            <div className='border grid grid-rows-3 justify-center text-center p-4 m-3'>
              <span className='flex justify-center text-center mt-4'><RiDrinks2Line className='text-7xl bg-slate-400 rounded-full p-3'/></span>
              <h1 className='font-bold text-2xl mt-2'>Drinks</h1>
              <p>in the era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#" className='text-red-700 font-bold font-mono'>Explore Menu</a>
            </div>
            
            <div className='border grid grid-rows-3 justify-center text-center p-4 m-3'>
              <span className='flex justify-center text-center mt-4'><LuCakeSlice className='text-7xl bg-slate-400 rounded-full p-3'/></span>
              <h1 className='font-bold text-2xl mt-2'>Desserts</h1>
              <p>in the era of technology we look in the future with certainty and pride for our life.</p>
              <a href="#" className='text-red-700 font-bold font-mono'>Explore Menu</a>
            </div>


        </div>
      </div>


{/* Section Three */}
      <div className='flex justify-around m-3 bg-slate-300 p-10'>
        <div className='p-3'>
          <img 
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            style={{width: "500px", height: "450px"}}
            className='rounded-lg' />
        </div>

        
        <div className='mt-3' style={{width: "500px"}}>
          <h1 className='text-center font-bold text-2xl mb-10'>We Provide Healthy Food For Your Family.</h1>

          <p className='ml-3 font-bold mb-5'>our story began with a vision to create a unique dining expreience that merges fine dining, expeptional service,
            and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global
            palate.
          </p>

          <span className='ml-3 flex'>At place, we believe that dining is not just food, but also about the overall expreience,
            our staff renowned for thier warmth and dedication, strives to make every visit an unforgettable event.
          </span>

          <button className='text-center justify-center flex mt-5 ml-7 bg-white border rounded-xl p-3 hover:bg-slate-400 hover:text-white'>More About Us</button>
        </div>
      </div>


{/* Section Four */}
    <div className='p-7'>
      <h1 className='m-2 p-2 text-4xl'>We Also Offer Unique Services For Your Events</h1>
      <div className='grid grid-cols-4 p-5 gap-3'>
        <span>
          <img 
          src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt=""
           style={{width: "300px", height: "300px"}}
           className='rounded-lg' />
           <h1 className='font-bold text-xl p-3'>Events</h1>
           <p>in the new era of technology we look in the future with certainty for life.</p>
        </span>
        <span>
          <img 
          src="https://images.pexels.com/photos/7180617/pexels-photo-7180617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt=""
          style={{width: "300px", height: "300px"}}
          className='rounded-lg' />
          <h1 className='font-bold text-xl p-3'>Birthdays</h1>
          <p>in the new era of technology we look in the future with certainty for life.</p>
        </span>
        <span>
          <img 
          src="https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt=""
          style={{width: "300px", height: "300px"}}
          className='rounded-lg' />
          <h1 className='font-bold text-xl p-3'>Weddings</h1>
          <p>in the new era of technology we look in the future with certainty for life.</p>
        </span>
        <span>
          <img 
          src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt=""
          style={{width: "300px", height: "300px"}}
          className='rounded-lg' />
          <h1 className='font-bold text-xl p-3'>Caterings</h1>
          <p>in the new era of technology we look in the future with certainty for life.</p>
        </span>
      </div>
    </div>


    {/* Section Five */}
    <div className='p-7 bg-slate-300 grid grid-cols-2'>

      <div className='flex flex-row gap-7 ml-7 p-5'>
          <div>
            <img
            src="https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            style={{width: "400px", height: "500px"}}
            className='ml-5 rounded-xl' />
          </div>

          <div className='flex flex-col'>
            <img 
            src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            style={{width: "250px", height: "250px"}}
            className='rounded-xl' />
            <img 
            src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt=""
            style={{width: "250px", height: "250px"}}
            className='rounded-xl' />
          </div>
      </div>
    

      <div className='grid grid-rows-2 ml-7 mt-10'>

        <div className='mt-4 p-3'>
          <h1 
          className='font-bold text-5xl font-mono'
          style={{width: "400px"}}>
            Fastest Food Dilvery In The City
          </h1>
          <p className='mt-5' style={{width: "400px"}}>our visual designer lets you quickly and of drag down your way to customapps for both keep desktop.</p>
        </div>

        <ul className='ml-3 mt-4'>
          <li className='mt-3 font-bold text-red-950'><FaClock className='inline-block m-2 text-lg' />Dilvery within 30 minutes</li>
          <li className='mt-3 font-bold text-red-950'> <MdLocalOffer className='inline-block m-2 text-xl' />Best offet and prices</li>
          <li className='mt-3 font-bold text-red-950'><FaShoppingCart className='inline-block m-2 text-xl' /> Online Services Available</li>
        </ul>
      </div>
    </div>


    {/* Section Six */}
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
    </Fragment>
  )
}

export default page
