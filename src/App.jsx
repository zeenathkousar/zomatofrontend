import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './screens/Home'
import Login from './screens/Login'
import { BrowserRouter as Router, Routes ,Route ,Link } from 'react-router-dom'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './screens/Signup.jsx'
import { CartProvider } from './components/ContextReducer.jsx'
import Cart from './screens/Cart.jsx'
import MyOrder from './screens/MyOrder.jsx'


function App() {

  return (
  

    <CartProvider>

    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />

          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/cart' element={<Cart/>} />
          <Route exact path='/myorders' element={<MyOrder />} />


        </Routes>
      </div>
    </Router>
    </CartProvider>
    

  )
}

export default App
