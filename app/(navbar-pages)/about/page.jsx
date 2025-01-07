import React from "react";
import "./../../../styles/globals.css";
import { PiPlayPauseFill } from "react-icons/pi";
import { IoMdClock } from "react-icons/io";
import { BsWindowDash } from "react-icons/bs";
import { RiTodoLine } from "react-icons/ri";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* Section One */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 p-5">
        <div>
          <Image
            src="https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="food"
            width={500}
            height={450}
            className="rounded-3xl w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-5 p-5">
          <h1 className="text-2xl md:text-3xl font-bold font-marienda text-center md:text-left">
            We Provide Healthy Food For Your Family.
          </h1>
          <p className="font-bold font-serif text-center md:text-left">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in the city&apos;s rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </p>
          <p className="text-center md:text-left">
            At our place, we believe that dining is not just about food, but
            also about the overall experience. Our staff, renowned for their
            warmth and dedication, strives to make every visit an unforgettable
            event.
          </p>
        </div>
      </section>

      {/* Section Two */}
      <section className="relative">
        <Image
          src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="restaurant"
          width={1260}
          height={750}
          className="w-full h-[500px] md:h-[700px] opacity-30 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-3xl font-black z-10">
          <span>
            <PiPlayPauseFill className="text-8xl bg-red-800 rounded-3xl p-2 text-gray-200 shadow-2xl" />
          </span>
          <p className="font-marienda text-2xl md:text-4xl mt-3">
            Feel The Authentic & Original Taste From Us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 m-5 p-5">
          {/* Left Side */}
          <div className="flex items-center gap-3">
            <IoMdClock className="text-4xl md:text-5xl text-red-900" />
            <div>
              <h1 className="font-extrabold font-mono text-lg md:text-xl">
                Fast Delivery
              </h1>
              <p>In the new era of technology, we look to the future with certainty.</p>
            </div>
          </div>
          {/* Mid Side */}
          <div className="flex items-center gap-3">
            <BsWindowDash className="text-4xl md:text-5xl text-red-900" />
            <div>
              <h1 className="font-extrabold font-mono text-lg md:text-xl">
                Easy To Order
              </h1>
              <p>In the new era of technology, we look to the future with certainty.</p>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex items-center gap-3">
            <RiTodoLine className="text-4xl md:text-5xl text-red-900" />
            <div>
              <h1 className="font-extrabold font-mono text-lg md:text-xl">
                Multi Cuisine
              </h1>
              <p>In the new era of technology, we look to the future with certainty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Three */}
      <section className="bg-gray-200 p-5">
        {/* Add Content Here */}
      </section>

      {/* Section Four */}
      <section className="p-7">
        <h1 className="font-bold text-3xl md:text-4xl text-center font-marienda">
          What Our Customers Say..
        </h1>
        <div className="flex flex-col md:flex-row justify-around mt-5 gap-5">
          {/* Testimonial Cards */}
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 border bg-gray-300 rounded-xl shadow-lg p-4 md:p-5 w-full md:w-[300px]"
            >
              <h1 className="font-bold text-red-800 text-lg md:text-xl">
                &quot;The Best Restaurant&quot;
              </h1>
              <p className="border-b-2 pb-3">
                Last night, we dined at our place and were simply blown away.
                From the moment we stepped in, we were enveloped in an inviting
                atmosphere and greeted with warm smiles.
              </p>
              {/* Profile Details */}
              <div className="flex items-center gap-3">
                <Image
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h1 className="font-bold">Jason Statham</h1>
                  <span>Los Angeles, US</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
