import React from 'react';

const Part = ({part}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={part.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{part.name}</h2>
    <p>{part.description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Part;