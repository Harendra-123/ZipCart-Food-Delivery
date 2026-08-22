import React from 'react'
import { ProfileNavigation } from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'
import Orders from './Orders'
import Favorites from './Favorites'
import Addres from './Addres'
import Events from './Events'




function Profile() {
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
         <ProfileNavigation/>
        </div>

        <div className='lg:w-[80%]'>

<Routes>
    <Route path='/' element={<UserProfile/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/address' element={<Addres/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/events' element={<Events/>}/>


</Routes>
        
        </div>

    </div>
  )
}

export default Profile