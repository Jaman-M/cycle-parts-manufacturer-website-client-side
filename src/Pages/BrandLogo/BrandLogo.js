import React from 'react';
import logo1 from '../../assets/logos/Alibaba.svg'
import logo2 from '../../assets/logos/Amazon.svg'
import logo3 from '../../assets/logos/Daraz.pk Logo.svg'
import logo4 from '../../assets/logos/Ebay.svg'
import logo5 from '../../assets/logos/Rakuten.svg'
import logo6 from '../../assets/logos/Target.svg'
import logo7 from '../../assets/logos/Walmart.svg'
import './BrandLogo.css';

const BrandLogo = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-primary text-center my-12'>Our Partners</h2>
            <hr />
            <div >
            <ul className='brand-logo'>
                <li><img src={logo1} alt="" /></li>
                <li><img src={logo2} alt="" /></li>
                <li><img src={logo3} alt="" /></li>
                <li><img src={logo4} alt="" /></li>
                <li><img src={logo5} alt="" /></li>
                <li><img src={logo6} alt="" /></li>
                <li><img src={logo7} alt="" /></li>
            </ul>
            </div>
            <hr />
        </div>
    );
};

export default BrandLogo;