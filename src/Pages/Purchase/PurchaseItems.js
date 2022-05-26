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
        <div>
            <h2>items: {parts.length}</h2>
            
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
    );
};

export default PurchaseItems;