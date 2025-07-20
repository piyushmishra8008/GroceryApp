import React, { useContext } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
import { AppContext } from './context/AppContext'
import MyOrders from './components/MyOrders'
const App = () => {
  const {isSeller} = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes('seller');
  return (
    
    <div>

      {isSellerPath ? null : <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/my-orders' element={<MyOrders />} />
        </Routes>
      </div>


    </div>
  )
}

export default App