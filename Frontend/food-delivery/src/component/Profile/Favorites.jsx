import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'

function Favorites() {
  return (
    <div className=''>
      <h1 className='py-5 text-xl font-semibold text-center '>My Favorites</h1>
      <div className=' gap-5 flex flex-wrap justify-center'>

        {
          [1,1,1].map((items)=> <RestaurantCard/>)
        }
      </div>
      
    </div>
  )
}

export default Favorites