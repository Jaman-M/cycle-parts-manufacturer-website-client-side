import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    {/* <!-- Page content here --> */}
    <h2 className=' mt-3 text-4xl text-primary font-bold'>Dashboard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to ="/dashboard"> My Orders</Link></li>
      <li><Link to ="/dashboard/review">My Review</Link></li>
      <li><Link to ="/dashboard/alluser">All User</Link></li>
      
      {/* {
        admin && <li><Link to ='dashboard/alluser'>All User</Link></li>
      }
      {
        admin && <li><Link to ='dashboard/additem'>Add Item</Link></li>
      } */}


      {/* <li><Link></Link></li> */}
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;