import React from 'react';

const PurchaseModal = ({ item }) => {
    const { name } = item;
    return (
        <div>
            <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <form className='grid grid-cols-1 gap-3 justify-items-center'>
                    <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Purchasing for: {name}</h3>
                    <input type="text" placeholder="Name" class="input input-bordered w-full max-w-xs" />
                    <input type="email" placeholder="your email" class="input input-bordered w-full max-w-xs" />
                    <input type="number" placeholder="amount" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                    <input type="Submit" value="submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                    
                </div>
            </div>

        </div>
    );
};

export default PurchaseModal;