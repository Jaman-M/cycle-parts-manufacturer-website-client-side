import React from 'react';
import BrandLogo from '../BrandLogo/BrandLogo';
import OurAddress from '../OurAddress';
import PurchaseItems from '../Purchase/PurchaseItems';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Footer from './Footer';
import OurItems from './OurItems';

import Parts from './Parts';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <BrandLogo></BrandLogo>
            <Parts></Parts>
            {/* <OurItems></OurItems> */}
            <OurItems></OurItems>
            {/* <PurchaseItems></PurchaseItems> */}
            <BusinessSummary></BusinessSummary>
            <OurAddress></OurAddress>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;