
/* --=======================================
    Start Import Style Here 
========================================-- */
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";
/* --=======================================
    End Import Style Here 
========================================-- */


/* --=======================================
    Start Import BrowserRouter Here 
========================================-- */
import { Route, Routes } from 'react-router-dom'
/* --=======================================
    End Import BrowserRouter Here 
========================================-- */

/* --=======================================
    Start Import All Pages Here 
========================================-- */
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Search from './pages/search/Search';
import Error from "./pages/error/Error";
import Shop from "./pages/shop/Shop";
import ShopDetails from "./pages/shop_details/ShopDetails";
import Cart from "./pages/cart/Cart";
import Checkout from './pages/checkout/Checkout';
import Wishlist from './pages/wishlist/Wishlist';
/* ====== Auth Pages ====== */
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import ForgetPassword from "./pages/auth/forget_password/ForgetPassword";


/* ====== Admin Pages ====== */
import AllProducts from "./pages/admin/all_products/AllProducts"
import CreateCategory from "./pages/admin/create_category/CreateCategory";
import CreateProduct from "./pages/admin/create_product/CreateProduct";
import AllOrders from "./pages/admin/orders/AllOrders";
import AdminProfile from "./pages/admin/profile/Profile"
import UpdateProduct from "./pages/admin/update_product/UpdateProduct";
import UpdateAdminProfile from "./pages/admin/update_profile/UpdateProfile";

/* ====== User Pages ====== */
import Orders from "./pages/user/orders/Orders";
import UserProfile from "./pages/user/profile/Profile";
import UpdateUserProfile from './pages/user/update_profile/UpdateProfile';
import OrderDetails from './pages/user/order__details/OrderDetails';



/* --=======================================
    End Import All Pages Here 
========================================-- */





function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop-details' element={<ShopDetails/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>

        {/* ====== Auth Page ====== */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>

        {/* ======= Admin Dashboard */}
        <Route path='/admin-profile' element={<AdminProfile/>}/>
        <Route path='/admin-update-profile' element={<UpdateAdminProfile/>}/>
        <Route path='/create-product' element={<CreateProduct/>}/>
        <Route path='/update-product' element={<UpdateProduct/>}/>
        <Route path='/all-products' element={<AllProducts/>}/>
        <Route path='/create-category' element={<CreateCategory/>}/>
        <Route path='/all-orders' element={<AllOrders/>}/>

        {/* ====== User Dashboard Page ======= */}
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/order-details' element={<OrderDetails/>} />
        <Route path='/user-profile' element={<UserProfile/>}/>
        <Route path='/user-update-profile' element={<UpdateUserProfile/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
