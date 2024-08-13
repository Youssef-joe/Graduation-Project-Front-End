"use client";

import React, { Fragment, useState } from 'react';
import "./../../../styles/globals.css";
import Breakfast from "./(Menu Categories)/Breakfast/page.jsx"
import All from "./(Menu Categories)/All/page.jsx"
import Desserts from "./(Menu Categories)/Desserts/page.jsx"
import Drinks from "./(Menu Categories)/Drinks/page.jsx"
import MainDishes from "./(Menu Categories)/MainDishes/Page.jsx"

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const renderSection = () => {
    switch(selectedCategory) {
      case "Breakfast":
        return <Breakfast/>;
      case "MainDishes":
        return <MainDishes/>
      case "Drinks":
        return <Drinks/>;
      case "Desserts" :
        return <Desserts/>;
      case "All" :
        return <All/>;
      default: 
        return <div className='text-center text-4xl font-marienda font-bold'> Select a category to view items</div>
    }
  }

  const menuItems = [
    { id: 1, category: 'Breakfast', name: 'first' },
    { id: 2, category: 'MainDishes', name: 'second' },
    { id: 3, category: 'Drinks', name: 'third' },
    { id: 4, category: 'Desserts', name: 'fourth' }
  ];

  // Filter Menu Based On Selected Category
  const filteredItems = menuItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <Fragment>
      {/* Section One */}
      <section>
        <div className='flex justify-center flex-col gap-2 m-5 p-5'>
          <h1 className='text-5xl font-bold font-marienda text-center'>Our Menu</h1>
          <p className='text-center'>
            We consider all the drivers of change and give you the components you need to create a truly happening experience.
          </p>
        </div>

        {/* Menu Buttons */}
        <div className='flex flex-row justify-center gap-5 m-5 p-5'>
          <button
            className='bg-red-800 text-white hover:bg-gray-300 hover:text-red-900 p-3 rounded-full'
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          <button
            className='bg-red-800 text-white hover:bg-gray-300 hover:text-red-900 p-3 rounded-full'
            onClick={() => setSelectedCategory('Breakfast')}
          >
            Breakfast
          </button>
          <button
            className='bg-red-800 text-white hover:bg-gray-300 hover:text-red-900 p-3 rounded-full'
            onClick={() => setSelectedCategory('MainDishes')}
          >
            Main Dishes
          </button>
          <button
            className='bg-red-800 text-white hover:bg-gray-300 hover:text-red-900 p-3 rounded-full'
            onClick={() => setSelectedCategory('Drinks')}
          >
            Drinks
          </button>
          <button
            className='bg-red-800 text-white hover:bg-gray-300 hover:text-red-900 p-3 rounded-full'
            onClick={() => setSelectedCategory('Desserts')}
          >
            Desserts
          </button>
        </div>

        {/* Display filtered menu items */}
        <div>
          {renderSection()}
        </div>

      </section>
    </Fragment>
  );
};

export default Menu;
