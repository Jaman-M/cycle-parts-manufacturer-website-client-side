import React from 'react';
import chain from '../../assets/images/chain.jpg'
import Part from './Part';

const Parts = () => {
    const parts = [
        {
            _id: 1,
            name: 'Bulk Chain',
            description: '"CN-HG71 SHIMANO ACERA-8-speed-HYPERGLIDE-MTB chain SHIMANO HG71 chain is specially designed for precise HYPERDRIVE SIS and DUAL SIS INDEX variable speed, and can also be used for E-BIKE. HG chain, precise HYPERDRIVE SIS/DUAL SIS (dual SIS) variable speed',
            img: chain
        },
        {
            _id: 2,
            name: 'Bulk Chain',
            description: '"CN-HG71 SHIMANO ACERA-8-speed-HYPERGLIDE-MTB chain SHIMANO HG71 chain is specially designed for precise HYPERDRIVE SIS and DUAL SIS INDEX variable speed, and can also be used for E-BIKE. HG chain, precise HYPERDRIVE SIS/DUAL SIS (dual SIS) variable speed',
            img: chain
        },
        {
            _id: 3,
            name: 'Bulk Chain',
            description: '"CN-HG71 SHIMANO ACERA-8-speed-HYPERGLIDE-MTB chain SHIMANO HG71 chain is specially designed for precise HYPERDRIVE SIS and DUAL SIS INDEX variable speed, and can also be used for E-BIKE. HG chain, precise HYPERDRIVE SIS/DUAL SIS (dual SIS) variable speed',
            img: chain
        },
        {
            _id: 4,
            name: 'Bulk Chain',
            description: '"CN-HG71 SHIMANO ACERA-8-speed-HYPERGLIDE-MTB chain SHIMANO HG71 chain is specially designed for precise HYPERDRIVE SIS and DUAL SIS INDEX variable speed, and can also be used for E-BIKE. HG chain, precise HYPERDRIVE SIS/DUAL SIS (dual SIS) variable speed',
            img: chain
        },
        {
            _id: 5,
            name: 'Bulk Chain',
            description: '"CN-HG71 SHIMANO ACERA-8-speed-HYPERGLIDE-MTB chain SHIMANO HG71 chain is specially designed for precise HYPERDRIVE SIS and DUAL SIS INDEX variable speed, and can also be used for E-BIKE. HG chain, precise HYPERDRIVE SIS/DUAL SIS (dual SIS) variable speed',
            img: chain
        },
        {
            _id: 6,
            name: 'Bulk Chain',
            description: '"CN-HG71 SHIMANO ACERA-8-speed-HYPERGLIDE-MTB chain SHIMANO HG71 chain is specially designed for precise HYPERDRIVE SIS and DUAL SIS INDEX variable speed, and can also be used for E-BIKE. HG chain, precise HYPERDRIVE SIS/DUAL SIS (dual SIS) variable speed',
            img: chain
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
            <h3 className='text-primary text-xl font-bold uppercase'>Our Parts</h3>
            <h2 className='text-4xl'>Available parts that We manufactured </h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.map(part => <Part
                    key={part._id}
                    part = {part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;