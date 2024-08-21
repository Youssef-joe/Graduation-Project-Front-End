// components/Breakfast.jsx
import React from 'react'
import Card from './Card'

const items = [
  {
    src: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: '$ 15.99',
    title: 'Cake ..',
    description: 'made with meat, salt, oil and other ingredients',
  },
  // Add more items as needed
]

const Breakfast = () => {
  return (
    <section className='flex flex-col justify-center text-center gap-5 m-5 p-5'>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className='flex flex-row justify-center text-center gap-3'>
          {items.map((item, idx) => (
            <Card
              key={idx}
              src={item.src}
              price={item.price}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      ))}
    </section>
  )
}

export default Breakfast
