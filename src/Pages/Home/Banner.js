import React from 'react';
import cycle from '../../assets/images/cycle.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src= {cycle} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Eco-friendly Vehicles</h1>
      <p className="py-6">Cycling! As a result a result of cycling keep yourself healthy and keep the environment free from the pollution. <strong>If there is any defect in the cycle equipment then come to us and get best cycle parts</strong></p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;