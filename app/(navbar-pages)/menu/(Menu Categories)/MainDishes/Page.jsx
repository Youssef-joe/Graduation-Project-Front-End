import React, { Fragment } from 'react';
import Image from 'next/image';

// Reusable DishCard component
const DishCard = ({ imageSrc, price, title, description }) => (
  <div className='flex flex-col bg-gray-200 p-5 rounded-3xl justify-center text-center gap-3'>
    <Image
      src={imageSrc}
      alt={title}
      layout="intrinsic"
      width={350}
      height={300}
      className='rounded-2xl object-cover'
    />
    <span className='text-red-700 font-bold text-xl'>{price}</span>
    <h1 className='font-bold text-xl'>{title}</h1>
    <p>{description}</p>
  </div>
);

const MainDishes = () => {
  const dishes = [
    { imageSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "$15.99", title: "Cake ..", description: "made with meat, salt, oil and other ingredients" },
    { imageSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "$15.99", title: "Cake ..", description: "made with meat, salt, oil and other ingredients" },
    { imageSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "$15.99", title: "Cake ..", description: "made with meat, salt, oil and other ingredients" },
    { imageSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "$15.99", title: "Cake ..", description: "made with meat, salt, oil and other ingredients" },
    { imageSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "$15.99", title: "Cake ..", description: "made with meat, salt, oil and other ingredients" },
    { imageSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "$15.99", title: "Cake ..", description: "made with meat, salt, oil and other ingredients" },
    { imageSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "$15.99", title: "Cake ..", description: "made with meat, salt, oil and other ingredients" },
    { imageSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "$15.99", title: "Cake ..", description: "made with meat, salt, oil and other ingredients" },
    { imageSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "$15.99", title: "Cake ..", description: "made with meat, salt, oil and other ingredients" },
    { imageSrc: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", price: "$15.99", title: "Cake ..", description: "made with meat, salt, oil and other ingredients" },
  ];

  return (
    <Fragment>
      <section className='flex flex-col justify-center text-center gap-5 m-5 p-5'>
        {dishes.reduce((rows, dish, index) => {
          if (index % 4 === 0) rows.push([]);
          rows[rows.length - 1].push(dish);
          return rows;
        }, []).map((row, rowIndex) => (
          <div key={rowIndex} className='flex flex-row justify-center text-center gap-3'>
            {row.map((dish, dishIndex) => (
              <DishCard key={dishIndex} {...dish} />
            ))}
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default MainDishes;
