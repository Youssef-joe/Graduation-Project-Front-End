// layout.jsx
import React from 'react';
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import Image from "next/image"

const Layout = ({ children }) => {
  return (
    <html>
      <body>

        <header className=''>


          <div className='flex justify-between bg-gray-600 text-xl p-3 m-2 text-white'>
            <div className='flex justify-center gap-3'>
                  <div className='flex flex-row'>
                  <BsTelephone className='mr-2'/>
                  <p className='text-sm'> +20-01119163058 </p>
                  </div>

                  <div className='flex flex-row'>
                  <MdOutlineEmail className='mr-2'/>
                  <p className='text-sm'>youssef.ali9966@gmail.com</p>
                  </div>

            </div>

            <div className='flex justify-center gap-2'>
              <FaFacebookSquare className='cursor-pointer' />
              <IoLogoInstagram  className='cursor-pointer'/>
              <FaSquareXTwitter className='cursor-pointer' />
              <FaGithub         className='cursor-pointer' />
            </div>

            </div>


            <div className='flex justify-around p-6'>
              <div className='flex justify-center gap-2'>
                <IoRestaurantOutline className='h-10 w-10 text-red-700' />
                <span className='text-3xl font-bold font-marienda m-2'>Bistro Bliss</span>
              </div>

              <div className='flex justify-center'>
                <ul className='flex justify-evenly gap-5 mt-2'>
                  <li className='hover:text-slate-500'> <Link href="/">Home</Link> </li>
                  <li className='hover:text-slate-500'> <Link href="/register">Register</Link> </li>
                  <li className='hover:text-slate-500'> <Link href="/menu">Menu</Link> </li>
                  <li className='hover:text-slate-500'> <Link href="/about">About</Link> </li>
                  <li className='hover:text-slate-500'> <Link href="contact">Contact</Link> </li>
                </ul>
              </div>
              
              <div>
                <Link href='/book' className='border-2 p-2 rounded-3xl border-black mb-2 hover:bg-slate-200'>Book A Table</Link>
              </div>
            </div>
        </header>


          <div>
            {children}
         </div>

         <footer className='bg-slate-700 grid grid-cols-3 text-white justify-center text-center'>

          <div className='grid grid-rows-3 p-5'>
            <span className='flex justify-center gap-2 mr-12'>
              <IoRestaurantOutline className='ml-5 h-10 w-10 text-white'/>
              <p className='text-3xl'>Bistro Bliss</p>
            </span>

            <p style={{width: "200px"}} className='ml-28'>in the new era of technology we look in the future with certainty and pride to for our company and.</p>

            <ul className='flex flex-row justify-center gap-5 mt-5 mr-9'>
              <li className='text-3xl bg-red-700 rounded-full p-2 cursor-pointer' style={{height : "50px"}} ><FaFacebookSquare /></li>
              <li className='text-3xl bg-red-700 rounded-full p-2 cursor-pointer' style={{height : "50px"}} ><IoLogoInstagram /></li>
              <li className='text-3xl bg-red-700 rounded-full p-2 cursor-pointer' style={{height : "50px"}} ><FaSquareXTwitter /></li>
              <li className='text-3xl bg-red-700 rounded-full p-2 cursor-pointer' style={{height : "50px"}} ><FaGithub /></li>
            </ul>
          </div>
           
          <div className='grid grid-cols-2 mt-2 p-3'>
            <div>
              Pages
                <ul className='mt-5'>
                  <li className='font-thin mt-2'>Home</li>
                  <li className='font-thin mt-2'>About</li>
                  <li className='font-thin mt-2'>Menu</li>
                  <li className='font-thin mt-2'>Pricing</li>
                  <li className='font-thin mt-2'>Blog</li>
                  <li className='font-thin mt-2'>Contact</li>
                  <li className='font-thin mt-2'>Delivery</li>
                </ul>
            </div>

            <div>
            Utility Pages
              <ul className='mt-5'>
                
                  <li className='font-thin mt-2'>Start Here</li>
                  <li className='font-thin mt-2'>Styleguide</li>
                  <li className='font-thin mt-2'>Password Protected</li>
                  <li className='font-thin mt-2'>404 Not Found</li>
                  <li className='font-thin mt-2'>Licenses</li>
                  <li className='font-thin mt-2'>Changelog</li>
                  <li className='font-thin mt-2'>View More</li>
              </ul>
            </div>
          </div>

          <div className='p-4'>
            <p>Follow Us In Instagram</p>
            <div className='grid grid-cols-2 gap-2 mr-5 p-4'>
              <div className='grid grid-rows-2 gap-4'>
                <Image 
                src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 alt="" 
                 width={200}
                 height={200}/>
                <Image 
                src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt=""
                width={200}
                height={200} />
              </div>

              <div className='grid grid-rows-2 gap-4 '>
                <Image 
                src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 alt=""
                 width={200}
                 height={200} />
                <Image
                 src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  width={200}
                  height={200} />
              </div>
            </div>
          </div>
            
         </footer>

      </body>
    </html>
  );
};

export default Layout;
