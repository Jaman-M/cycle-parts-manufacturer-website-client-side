import React from 'react';
import addresspic from '../assets/images/Address.png'

const OurAddress = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row">
                <img src={addresspic} />
                <div>
                    <h1 class="text-5xl font-bold">Our Address!</h1>
                    <li><i>Office of Deputy Commissioner xyz · Export Assessment Section, Customs (1st floor) · Export Village · Office of Assistant Commissioner, Dhaka</i></li>
                    <li><i>Address: 8Q6X+QGR, Port Colony Road, Chattogram 4100</i></li>
                    <li><i>Hili port: 4y= Gate-1| mob:01500000</i></li> <br /> <br />

                    
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default OurAddress;