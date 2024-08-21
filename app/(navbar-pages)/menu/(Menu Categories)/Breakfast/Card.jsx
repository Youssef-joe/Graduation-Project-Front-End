// components/Card.jsx
import React from 'react';
import Image from 'next/image';

const Card = ({ src, price, title, description }) => {
  return (
    <div className='flex flex-col bg-gray-200 p-5 rounded-3xl justify-center text-center gap-3'>
      <Image src={src} alt={title} width={350} height={300} className='rounded-2xl' />
      <span className='text-red-700 font-bold text-xl'>{price}</span>
      <h1 className='font-bold text-xl'>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
