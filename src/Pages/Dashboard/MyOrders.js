
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import OrderDetails from "./OrderDetails";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/orders/user/${user.email}`)
          .then(res => res.json())
            .then(data => setProducts(data));
    }, [user.email])

    const email = user.email;

    const handleDelate = id => {
        const rest = products.filter(product => product._id !== id)
        const proceed = window.confirm('Are You Sure Cancel This ???')
        if (proceed) {
            const url = (`http://localhost:5000/orders/orders/${id}`)
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setProducts(rest)

                    })
        }
    }

    return (
        <div>
    
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                
                                
                                <th scope="col" class="px-6 py-3">
                                    email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    quantity
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Pay Now
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Cancel Order
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                        products.map(order =><OrderDetails
                                          key={order._id}
                                          order={order}
                                          handleDelate={handleDelate}
                                        ></OrderDetails>)
                                    }
    
                            
    
    
    
                        </tbody>
                    </table>
                </div>
         
        </div>
      );
    
    
    
    
};

export default MyOrders;