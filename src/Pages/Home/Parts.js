import React, { useEffect, useState } from 'react';

const Parts = () => {
    const {parts, setParts} = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    return (
        <div>
            {/* <h1>items: {parts.length}</h1> */}
        </div>
    );
};

export default Parts;