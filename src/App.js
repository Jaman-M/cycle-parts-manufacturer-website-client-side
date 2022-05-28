import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import PurchaseItems from './Pages/Purchase/PurchaseItems';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import Review from './Pages/Dashboard/Review';
import Blogs from './Pages/Dashboard/Blogs';
import NotFound from './Pages/Shared/NotFound/NotFound';
import MyPortfolio from './Pages/MyPortfolio';
import AllUsers from './Pages/Dashboard/AllUsers';

function App() {
  return (
    <div className='px-12' >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='about' element={<About></About>}></Route> */}
        <Route path='purchaseitems' element={
          <RequireAuth>
            <PurchaseItems></PurchaseItems>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="user" element={<AllUsers></AllUsers>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
        </Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
