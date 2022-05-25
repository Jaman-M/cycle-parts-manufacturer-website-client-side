import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Parts from './Parts';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Parts></Parts>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;