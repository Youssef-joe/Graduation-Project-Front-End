import React, { Fragment } from 'react';
import Image from 'next/image';

const dessertData = [
  {
    id: 1,
    price: '$15.99',
    title: 'Cake ..',
    description: 'Made with meat, salt, oil and other ingredients',
    imgSrc: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    width: 350,
    height: 300,
  },
  // Add more items as needed with width and height properties
];

const Desserts = () => {
  const rows = Math.ceil(dessertData.length / 3); // Adjust the number of columns here
  const dessertRows = Array.from({ length: rows }).map((_, rowIndex) => {
    const start = rowIndex * 3;
    const end = start + 3;
    return dessertData.slice(start, end);
  });

  return (
    <Fragment>
      <section className='flex flex-col justify-center text-center gap-5 m-5 p-5'>
        {dessertRows.map((row, rowIndex) => (
          <div key={rowIndex} className='flex flex-row justify-center text-center gap-3'>
            {row.map(dessert => (
              <div key={dessert.id} className='flex flex-col bg-gray-200 p-5 rounded-3xl justify-center text-center gap-3'>
                <Image
                  src={dessert.imgSrc}
                  alt={dessert.title}
                  width={dessert.width}
                  height={dessert.height}
                  className='rounded-2xl'
                />
                <span className='text-red-700 font-bold text-xl'>{dessert.price}</span>
                <h1 className='font-bold text-xl'>{dessert.title}</h1>
                <p>{dessert.description}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Desserts;
