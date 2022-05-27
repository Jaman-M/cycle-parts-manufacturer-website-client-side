import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({ part }) => {
  const { name, img, description, price, Available, minOrder } = part;
  return (
    <div className='mb-10'>
      {/* <h1>{name}</h1>
        <img src={img} alt="" /> */}
      <div class="card lg:mx-w-lg w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body text-center">
        <h2 className="text-xl font-bold text-primary">{name}</h2>
          <p>{description}</p>
          <p>Price: {price}</p>
          <p>Total Available: {Available}</p>
          <p>Minimum Order: {minOrder} pieces</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Part;