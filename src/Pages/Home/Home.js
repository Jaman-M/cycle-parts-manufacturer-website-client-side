import React from 'react';
import PurchaseItems from '../Purchase/PurchaseItems';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Footer from './Footer';

import Parts from './Parts';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            {/* <OurItems></OurItems> */}
            <PurchaseItems></PurchaseItems>
            <BusinessSummary></BusinessSummary>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;