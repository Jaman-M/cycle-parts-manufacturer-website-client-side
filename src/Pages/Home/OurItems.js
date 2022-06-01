import React from 'react';
import { Link } from 'react-router-dom';
import useParts from '../../Hooks/useParts.js/useParts';
import AllParts from './AllParts';


const OurItems = () => {
    const [parts] = useParts()
    return (
       <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 gap-y-10">

           {
               parts.slice(0, 6).map((part)=>(<AllParts
               key={part._id}
               part={part}
               ></AllParts>))
           }
       </div>
    );
};

export default OurItems;