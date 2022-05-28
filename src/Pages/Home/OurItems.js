import React from 'react';
import { Link } from 'react-router-dom';


const OurItems = () => {
    return (
        <div className='mb-10'>
            <h2 className='text-2xl font-bold text-primary text-center my-12'>Our Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://sc04.alicdn.com/kf/H0bf4993a47c2459cb9777194ff8ce856h.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Black spare</h2>
                    <p>CN-HG71 SHIMANO bd -cn dhaka ACERA-8- more info....</p>
                    <li>price:$20</li>
                    <li>Total Available:15000</li>
                    <li>Minimum Order:600 pieces</li>
                    <div class="card-actions">
                        <button class="btn btn-primary"><Link to="/purchaseitems">Purchase Items</Link></button>
                        {/* <Link to="/purchaseitems">Purchase Items</Link> */}
                    </div>
                </div>
            </div>
            <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://sc04.alicdn.com/kf/Haa236b774a5140ea810458c34f46e774N.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Spare</h2>
                    <p>New Product Hot Selling Bike Parts mounntine bike ...more info</p>
                    <li>price:$10</li>
                    <li>Total Available:25000</li>
                    <li>Minimum Order:600 pieces</li>
                    <div class="card-actions">
                        <button class="btn btn-primary"><Link to="/purchaseitems">Purchase Items</Link></button>
                        {/* <Link to="/purchaseitems">Purchase Items</Link> */}
                    </div>
                </div>
            </div>
            <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://sc04.alicdn.com/kf/Ha370e5b00c9c4733bd0fb6b6e6e6f4d6B.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Pedals ultralight</h2>
                    <p>hot selling cycle parts bicycle pedals ultraligg for more info....</p>
                    <li>price:$20</li>
                    <li>Total Available:20000</li>
                    <li>Minimum Order:600 pieces</li>
                    <div class="card-actions">
                        <button class="btn btn-primary"><Link to="/purchaseitems">Purchase Items</Link></button>
                        {/* <Link to="/purchaseitems">Purchase Items</Link> */}
                    </div>
                </div>
            </div>
            <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://sc04.alicdn.com/kf/H2c73f3db3be64f7a92f1fe9af0429b9br.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Chain Crankset</h2>
                    <p>2021 SRAM SX EAGLE DUB 1x12 12 Speed ... more info</p>
                    <li>price:$200</li>
                    <li>Total Available:20000</li>
                    <li>Minimum Order:600 pieces</li>
                    <div class="card-actions">
                        <button class="btn btn-primary"><Link to="/purchaseitems">Purchase Items</Link></button>
                        {/* <Link to="/purchaseitems">Purchase Items</Link> */}
                    </div>
                </div>
            </div>
            <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://sc04.alicdn.com/kf/Hfa5678564a564309a0340cb75fc5489d3.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Hydraulic set</h2>
                    <p>Shimano MT200 MTB Hydraulic Oil Press Disc...more info</p>
                    <li>price:$40</li>
                    <li>Total Available:15000</li>
                    <li>Minimum Order:600 pieces</li>
                    <div class="card-actions">
                        <button class="btn btn-primary"><Link to="/purchaseitems">Purchase Items</Link></button>
                        {/* <Link to="/purchaseitems">Purchase Items</Link> */}
                    </div>
                </div>
            </div>
            <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://sc04.alicdn.com/kf/H4ed5ce46643a4dd4b242564d93543df8X.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Brake</h2>
                    <p>High Quality ZOOM HB876 Bicycle Brake ...more info</p>
                    <li>price:$20</li>
                    <li>Total Available:15000</li>
                    <li>Minimum Order:600 pieces</li>
                    <div class="card-actions">
                        <button class="btn btn-primary"><Link to="/purchaseitems">Purchase Items</Link></button>
                        {/* <Link to="/purchaseitems">Purchase Items</Link> */}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OurItems;