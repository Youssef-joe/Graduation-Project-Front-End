"use client";
import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinks2Line } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
import Link from "next/link";
import Image from "next/image";
import "./../../styles/globals.css";

const Home = () => {
  return (
    <div>
      {/* Section One */}
      <div className="relative flex flex-col items-center">
        <Image
          src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Food"
          className="z-0 w-full h-[50vh] object-cover sm:h-[70vh]"
          height={750}
          width={1260}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black font-roboto max-w-xl">
            Best Food For Your Taste
          </h1>
          <p className="text-sm sm:text-base font-serif text-black max-w-md font-bold bg-white rounded-full bg-opacity-50">
            Discover delectable cuisine and unforgettable moments in our welcoming culinary heaven.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            <Link
              className="bg-red-800 px-6 py-3 rounded-xl text-white hover:bg-red-600"
              href="/book"
            >
              Book A Table
            </Link>
            <Link
              className="bg-white px-6 py-3 rounded-xl hover:bg-gray-200"
              href="/menu"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Section Two */}
      <section className="py-10 px-5">
        <h1 className="text-center text-3xl sm:text-4xl font-bold font-serif mb-8">
          Browse Our Menu
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: GiCoffeeCup, title: "Breakfast", color: "bg-slate-400" },
            { Icon: FaBowlFood, title: "Main Dishes", color: "bg-slate-400" },
            { Icon: RiDrinks2Line, title: "Drinks", color: "bg-slate-400" },
            { Icon: LuCakeSlice, title: "Desserts", color: "bg-slate-400" },
          ].map(({ Icon, title, color }, idx) => (
            <div
              key={idx}
              className="border p-6 shadow-lg rounded-lg text-center flex flex-col items-center gap-4"
            >
              <Icon className={`text-5xl ${color} rounded-full p-4`} />
              <h1 className="font-bold text-xl">{title}</h1>
              <p className="text-sm text-gray-600">
                In the era of technology, we look into the future with certainty and pride.
              </p>
              <a
                href="/menu"
                className="text-red-700 font-bold font-mono hover:underline"
              >
                Explore Menu
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section Three */}
      <section className="flex flex-col lg:flex-row justify-between items-center gap-6 bg-gray-100 p-10">
        <Image
          src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Healthy Food"
          className="rounded-lg w-full lg:w-1/2 object-cover"
          width={500}
          height={450}
        />
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-2xl font-bold mb-4">
            We Provide Healthy Food For Your Family
          </h1>
          <p className="text-sm text-gray-700 mb-4">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance.
          </p>
          <p className="text-sm text-gray-700">
            At our place, we believe dining is not just about food — it’s also about the overall experience. Our staff strives to make every visit unforgettable.
          </p>
          <button className="mt-5 bg-red-800 text-white px-6 py-3 rounded-xl hover:bg-red-600">
            More About Us
          </button>
        </div>
      </section>

      {/* Section Four */}
      <section className="py-10 px-5">
        <h1 className="text-3xl font-bold mb-8">
          We Also Offer Unique Services For Your Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              src: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Party",
            },
            {
              src: "https://images.pexels.com/photos/10994599/pexels-photo-10994599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Weddings",
            },
            {
              src: "https://images.pexels.com/photos/4916556/pexels-photo-4916556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Catering",
            },
            {
              src: "https://images.pexels.com/photos/6518865/pexels-photo-6518865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Corporate Events",
            },
          ].map(({ src, title }, idx) => (
            <div key={idx} className="shadow-lg rounded-lg overflow-hidden p-4 hover:cursor-pointer">
              <Image
                src={src}
                alt={title}
                className="w-full h-48 object-cover"
                width={300}
                height={200}
              />
              <h1 className="text-center font-bold text-xl mt-3">{title}</h1>
            </div>
          ))}
        </div>
      </section>

      {/* Section Five */}
      <footer className="bg-gray-200 p-10 flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold mb-2">Stay Updated!</h1>
        <p className="mb-5 text-gray-600">
          Subscribe to our newsletter and receive updates about our events, promotions, and special offers.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="rounded-lg p-3 mb-3 w-full max-w-md border"
        />
        <button className="bg-red-800 px-6 py-3 rounded-lg hover:bg-red-600 text-white font-bold">
          Subscribe
        </button>
      </footer>
    </div>
  );
};

export default Home;
