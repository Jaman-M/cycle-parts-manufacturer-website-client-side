import React, { useEffect, useState } from 'react';

const Parts = () => {
    const {parts, setParts} = useState([])
    useEffect(()=>{
        fetch('https://radiant-gorge-80765.herokuapp.com/parts')
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