import React from 'react';

const AllParts = ({ part }) => {
    const { name, img, price, Available, minOrder, description } = part
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>Discription: {description}</p>
                    <h2>Price: {price}</h2>
                    <h2>Available:{Available}</h2>
                    <h2>MinOrder: {minOrder}</h2>
                    
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllParts;