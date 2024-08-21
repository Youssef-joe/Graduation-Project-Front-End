import React, { Fragment } from 'react';
import Image from 'next/image';

const Card = ({ image, price, title, description, width, height }) => (
  <div className='flex flex-col bg-gray-200 p-5 rounded-3xl justify-center text-center gap-3'>
    <Image
      src={image}
      alt={title}
      width={width}
      height={height}
      className='rounded-2xl'
    />
    <span className='text-red-700 font-bold text-xl'>{price}</span>
    <h1 className='font-bold text-xl'>{title}</h1>
    <p>{description}</p>
  </div>
);

const Drinks = () => {
  const drinkData = [
    { 
      image: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
      price: '$15.99', 
      title: 'Cake ..', 
      description: 'Made with meat, salt, oil and other ingredients', 
      width: 350, 
      height: 300 
    },
    // Add more drink data here
  ];

  return (
    <Fragment>
      <section className='flex flex-col justify-center text-center gap-5 m-5 p-5'>
        {Array.from({ length: Math.ceil(drinkData.length / 4) }).map((_, rowIndex) => (
          <div key={rowIndex} className='flex flex-row justify-center text-center gap-3'>
            {drinkData.slice(rowIndex * 4, rowIndex * 4 + 4).map((drink, index) => (
              <Card
                key={index}
                image={drink.image}
                price={drink.price}
                title={drink.title}
                description={drink.description}
                width={drink.width}
                height={drink.height}
              />
            ))}
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Drinks;
