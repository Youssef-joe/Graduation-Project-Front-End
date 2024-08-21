"use client";

import React, { Fragment } from 'react';
import Image from 'next/image';

// Reusable MenuCard Component
const MenuCard = ({ imageSrc, price, title, description, width, height }) => (
  <div className='flex flex-col bg-gray-200 p-5 rounded-3xl justify-center text-center gap-3'>
    <Image
      src={imageSrc}
      alt={title}
      width={width} // Pass the width here
      height={height} // Pass the height here
      className='rounded-2xl'
    />
    <span className='text-red-700 font-bold text-xl'>${price}</span>
    <h1 className='font-bold text-xl'>{title}</h1>
    <p>{description}</p>
  </div>
);

const All = () => {
  // Example data - replace with actual data source
  const menuItems = [
    {
      id: 1,
      imageSrc: "https://images.pexels.com/photos/2067401/pexels-photo-2067401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "15.99",
      width: 500,  // Width property
      height: 500, // Height property
      title: "Pepperoni Pizza",
      description: "Made with meat, salt, oil, and other ingredients"
    },
    // Add more items as needed
  ];

  return (
    <Fragment>
      <section className='flex flex-col justify-center text-center gap-5 m-5 p-5'>
        <div className='flex flex-row flex-wrap justify-center text-center gap-3'>
          {menuItems.map(item => (
            <MenuCard
              key={item.id}
              imageSrc={item.imageSrc}
              price={item.price}
              title={item.title}
              description={item.description}
              width={item.width} // Pass width to the MenuCard
              height={item.height} // Pass height to the MenuCard
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default All;
