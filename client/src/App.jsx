import React, { useContext } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'
import MyOrders from './components/MyOrders'
import Auth from './modals/Auth'
import ProductCategory from './pages/ProductCategory'
import Footer from './components/Footer'
import { Toaster  } from 'react-hot-toast'
const App = () => {
  const {isSeller,showUserLogin} = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes('seller');
  return (

    <div className='text-default min-h-screen'>

      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Auth /> : null}
      <Toaster />
      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:category/:id" element={<ProductDetails />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/my-orders' element={<MyOrders />} />
        </Routes>
      </div>

      {isSellerPath ? null : <Footer />}
    </div>
  )
}

export default App