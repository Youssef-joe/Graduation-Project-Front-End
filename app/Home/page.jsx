"use client";
import React from "react";
import { motion } from "framer-motion";
import { GiCoffeeCup } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { RiDrinks2Line } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import "./../../styles/globals.css";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  return (
    <motion.div initial="initial" animate="animate">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <Image
          src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Food"
          className="absolute inset-0 w-full h-full object-cover"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div 
          className="relative z-10 text-center px-4"
          variants={staggerContainer}>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white font-roboto mb-6"
            variants={fadeInUp}>
            Best Food For 
            <span className="text-red-500"> Your Taste</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-8"
            variants={fadeInUp}>
            Discover delectable cuisine and unforgettable moments in our welcoming culinary heaven.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={fadeInUp}>
            <Link
              href="/book"
              className="group relative px-8 py-4 bg-red-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-red-700">
              <span className="relative z-10">Book A Table</span>
              <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link
              href="/menu"
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-full overflow-hidden transition-all duration-300 hover:text-white">
              <span className="relative z-10 flex items-center gap-2">
                Explore Menu
                <BsArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Menu Categories Section */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Browse Our Menu</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Explore our wide range of delicious offerings, carefully crafted to satisfy your cravings
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: GiCoffeeCup, title: "Breakfast", color: "bg-amber-100", iconColor: "text-amber-600" },
              { Icon: FaBowlFood, title: "Main Dishes", color: "bg-red-100", iconColor: "text-red-600" },
              { Icon: RiDrinks2Line, title: "Drinks", color: "bg-blue-100", iconColor: "text-blue-600" },
              { Icon: LuCakeSlice, title: "Desserts", color: "bg-purple-100", iconColor: "text-purple-600" },
            ].map(({ Icon, title, color, iconColor }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`${color} p-8 rounded-2xl text-center group hover:shadow-xl transition-all duration-300`}>
                <div className="flex flex-col items-center">
                  <div className={`${iconColor} text-5xl mb-4 transform group-hover:scale-110 transition-transform`}>
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <p className="text-gray-600 mb-4">
                    Discover our delicious selection of {title.toLowerCase()}
                  </p>
                  <Link
                    href="/menu"
                    className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
                    View Menu <BsArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10">
                <Image
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Healthy Food"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <div className="absolute inset-0 bg-red-200 rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
            </div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">
                We Provide Healthy Food For Your Family
              </h2>
              <p className="text-gray-600 mb-6">
                Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Every dish is crafted with passion and precision by our expert chefs.
              </p>
              <p className="text-gray-600 mb-8">
                At our place, we believe dining is not just about food — it's about creating memorable experiences that bring people together.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                Learn More About Us <BsArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We offer a range of services to make your special occasions truly memorable
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                src: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg",
                title: "Private Parties",
                description: "Perfect for birthdays and celebrations"
              },
              {
                src: "https://images.pexels.com/photos/10994599/pexels-photo-10994599.jpeg",
                title: "Wedding Catering",
                description: "Make your special day memorable"
              },
              {
                src: "https://images.pexels.com/photos/4916556/pexels-photo-4916556.jpeg",
                title: "Corporate Events",
                description: "Professional service for your business"
              },
              {
                src: "https://images.pexels.com/photos/6518865/pexels-photo-6518865.jpeg",
                title: "Special Occasions",
                description: "Custom menus for any event"
              }
            ].map(({ src, title, description }, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={src}
                  alt={title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-200">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto max-w-4xl bg-red-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Stay Updated!</h2>
          <p className="text-lg mb-8 opacity-90">
            Subscribe to our newsletter for exclusive offers and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
