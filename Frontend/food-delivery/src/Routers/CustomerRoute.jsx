import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home/Home'
import Profile from '../component/Profile/Profile'
import Cart from '../component/Cart/Cart'
import RestauratDetails from '../component/Restaurant/RestaurantDetails'

export default function CustomerRoute() {
  return (
    <div>
        
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
             <Route path='/account/:register' element={<Home/>}/>
              <Route path='/restaurant/:city/:title/:id' element={<RestauratDetails/>}/>
               <Route path='/cart' element={<Cart/>}/>
                <Route path='/my-profile/*' element={<Profile/>}/>
        </Routes>
    </div>
  )
}
