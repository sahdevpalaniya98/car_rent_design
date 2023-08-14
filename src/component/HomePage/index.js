import React from 'react';
import Header from './header.js';
import Content from './content.js';

const economy = [
  {
    name: 'Geely Vision GC7',
    image: 'https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/Geely-Vision-GC7.jpg',
  },
  {
    name: 'Honda Accord Hybrid',
    image: 'https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car2.jpg',
  },
  {
    name: 'Renault Megane Estate GT',
    image: 'https://demo.crocoblock.com/rentgo-new/wp-content/uploads/2020/03/car1.jpg',
  },
];
const  index = () => {
  return (
    <>
      <Header />
      <div className='section-one'>
        <div className='content-section'>
          <div className='section-title section-one-label'>
            <h2>
              Get Our Rental Cars
            </h2>
          </div>
          <Content category="Economy" price="20" economyCars={economy} />
          {/* <Content category="Intermediate" price="29" />
          <Content category="Standard" price="36" />
          <Content category="Luxury" price="45" /> */}
        </div>
      </div>
      {/* <Card /> */}
    </>
  )
}

export default index