import React from 'react';
import error from '../../../assets/images/NotFound.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'> page not found</h2>
            {/* <img className='w-100 ' src={error} alt="" /> */}
            <h1 className='text-center text-9xl text-red-600 text-bold'> 404 </h1>
            <h1 className='text-center text-5xl '> Not Found </h1>
        </div>
    );
};

export default NotFound;