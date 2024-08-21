import React from 'react';
import { GiCoffeeCup } from 'react-icons/gi';
import { FaBowlFood } from "react-icons/fa6"; // Verify this import
import { RiDrinks2Line } from 'react-icons/ri';
import { LuCakeSlice } from 'react-icons/lu';
import { FaClock } from 'react-icons/fa';
import { MdLocalOffer } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import "./../styles/globals.css"

const Page = () => {
  return (
    <div>
      {/* Section One */}
      <div className='relative flex justify-center'>
        <Image
          src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Food"
          className='z-0 w-full'
          height={750}
          width={1260}
        />
        <div className='absolute inset-0 flex items-center justify-center flex-col gap-2'>
          <h1 className='text-7xl font-bold text-black font-roboto text-center'
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

      {/* Section Two */}
      <div>
        <h1 className='flex justify-center text-center p-4 text-4xl font-bold font-serif'>Browse Our Menu</h1>

        <div className='flex flex-row justify-around text-center m-2 p-2'>
            <div className='border grid grid-rows-3 justify-center text-center p-4 m-3'>
              <span className='flex justify-center text-center mt-4'><GiCoffeeCup className='text-7xl bg-slate-400 rounded-full p-3'/></span>
              <h1 className='font-bold text-2xl mt-2'>Breakfast</h1>
              <p>In the era of technology we look into the future with certainty and pride for our life.</p>
              <a href="#" className='text-red-700 font-bold font-mono'>Explore Menu</a>
            </div>

            <div className='border grid grid-rows-3 justify-center text-center p-4 m-3'>
              <span className='flex justify-center text-center mt-4'><FaBowlFood className='text-7xl bg-slate-400 rounded-full p-3'/></span>
              <h1 className='font-bold text-2xl mt-2'>Main Dishes</h1>
              <p>In the era of technology we look into the future with certainty and pride for our life.</p>
              <a href="#" className='text-red-700 font-bold font-mono'>Explore Menu</a>
            </div>

            <div className='border grid grid-rows-3 justify-center text-center p-4 m-3'>
              <span className='flex justify-center text-center mt-4'><RiDrinks2Line className='text-7xl bg-slate-400 rounded-full p-3'/></span>
              <h1 className='font-bold text-2xl mt-2'>Drinks</h1>
              <p>In the era of technology we look into the future with certainty and pride for our life.</p>
              <a href="#" className='text-red-700 font-bold font-mono'>Explore Menu</a>
            </div>
            
            <div className='border grid grid-rows-3 justify-center text-center p-4 m-3'>
              <span className='flex justify-center text-center mt-4'><LuCakeSlice className='text-7xl bg-slate-400 rounded-full p-3'/></span>
              <h1 className='font-bold text-2xl mt-2'>Desserts</h1>
              <p>In the era of technology we look into the future with certainty and pride for our life.</p>
              <a href="#" className='text-red-700 font-bold font-mono'>Explore Menu</a>
            </div>
        </div>
      </div>

      {/* Section Three */}
      <div className='flex justify-around m-3 bg-slate-300 p-10'>
        <div className='p-3'>
          <Image 
            src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Healthy Food"
            style={{width: "500px", height: "450px"}}
            className='rounded-lg' 
            width={500}
            height={450}
          />
        </div>
        
        <div className='mt-3' style={{width: "500px"}}>
          <h1 className='text-center font-bold text-2xl mb-10'>We Provide Healthy Food For Your Family.</h1>

          <p className='ml-3 font-bold mb-5'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in the city&rsquo;s rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>

          <span className='ml-3 flex'>At our place, we believe that dining is not just about food &mdash; it&rsquo;s also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</span>

          <button className='text-center justify-center flex mt-5 ml-7 bg-white border rounded-xl p-3 hover:bg-slate-400 hover:text-white'>More About Us</button>
        </div>
      </div>

      {/* Section Four */}
      <div className='p-7'>
        <h1 className='m-2 p-2 text-4xl'>We Also Offer Unique Services For Your Events</h1>
        <div className='grid grid-cols-4 p-5 gap-3'>
          <span>
            <Image 
              src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Events"
              className='rounded-lg' 
              width={1260}
              height={750}
            />
            <h1 className='font-bold text-xl p-3'>Events</h1>
            <p>In the new era of technology, we look into the future with certainty for life.</p>
          </span>

          <span>
            <Image 
              src="https://images.pexels.com/photos/3260300/pexels-photo-3260300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Reservations"
              className='rounded-lg' 
              width={1260}
              height={750}
            />
            <h1 className='font-bold text-xl p-3'>Reservations</h1>
            <p>In the new era of technology, we look into the future with certainty for life.</p>
          </span>

          <span>
            <Image 
              src="https://images.pexels.com/photos/1887333/pexels-photo-1887333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Delivery"
              className='rounded-lg' 
              width={1260}
              height={750}
            />
            <h1 className='font-bold text-xl p-3'>Delivery</h1>
            <p>In the new era of technology, we look into the future with certainty for life.</p>
          </span>

          <span>
            <Image 
              src="https://images.pexels.com/photos/3823477/pexels-photo-3823477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Catering"
              className='rounded-lg' 
              width={1260}
              height={750}
            />
            <h1 className='font-bold text-xl p-3'>Catering</h1>
            <p>In the new era of technology, we look into the future with certainty for life.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
