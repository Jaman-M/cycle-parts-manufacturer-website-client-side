import React from 'react';
import cycle from '../../assets/images/cycle.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src= {cycle} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Eco-friendly Vehicles</h1>
      <p class="py-6">Cycling! As a result a result of cycling keep yourself healthy and keep the environment free from the pollution. <strong>If there is any defect in the cycle equipment then come to us and get best cycle parts</strong></p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;