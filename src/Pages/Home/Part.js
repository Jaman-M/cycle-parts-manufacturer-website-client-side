import React from 'react';
import { Link } from 'react-router-dom';

const Part = ({part}) => {
  const {name, img, description, price} = part;
    return (
      <div>
        <h1>{name}</h1>
        <img src={img} alt="" />
      </div>
    );
};

export default Part;