import React, { useEffect, useState } from 'react';
import Part from '../Home/Part';
import Parts from '../Home/Parts';

const PurchaseItems = () => {
    const [parts, setParts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    return (
        <div className='mb-5'>
            <h2 className='text-2xl font-bold text-primary text-center my-12'>Our Items</h2>
            {/* <h2>items: {parts.length}</h2> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            
            
            
            {
                parts.map(part =>(
                    <Part
                    key={part._id}
                    part={part}
                    >

                    </Part>)
                )
            }


        </div>

        </div>
        
    );
};

export default PurchaseItems;