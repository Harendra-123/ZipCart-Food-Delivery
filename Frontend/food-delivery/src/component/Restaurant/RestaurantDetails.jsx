import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { MenuCard } from './MenuCard';


const category=[
  "pizza",
  "burger",
  "chicken",
  "rice",
  "biryani"
];

const foodTypes=[
  {label:"All" , value:"all"},
    {label:"Vegetarian" , value:"vegetarian"},
      {label:"Non-Vegetarian" , value:"non-vegetarian"},
        {label:"Seasonal" , value:"seasonal"}
]

const menu=[1,1,1,1,1];

const handleFilter=(e)=>{
  console.log(e.target.value, e.target.name)
}
const RestauratDetails = () => {
  const [foodType,setFoodType]=useState("all")
  return (
    <div className='px-5 lg:px-20'>
       <section>
       <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food /3 </h3>
       <div>
 <Grid container spacing={2}>
      <Grid size={12}>
    <img
      className="w-full h-[40vh] object-cover"
      src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg"
      alt=""
    />
  </Grid>

  <Grid size={{ xs: 12, lg: 6 }}>
    <img
      className="w-full h-[40vh] object-cover"
      src="https://images.pexels.com/photos/11236793/pexels-photo-11236793.jpeg"
      alt=""
    />
  </Grid>

  <Grid size={{ xs: 12, lg: 6 }}>
    <img
      className="w-full h-[40vh] object-cover"
      src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg"
      alt=""
    />
  </Grid>
      </Grid>
       </div>
      
      <div className='pb-5 pt-3 '>
        <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
       <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur odio eligendi odit deleniti repellat. Soluta iure vero vel error velit! Modi nulla hic debitis aperiam ducimus. Enim aliquid beatae quos?</p>
       <div className='space-y-3 mt-3'>
      <p className='text-gray-500 flex items-center gap-3'>

           <LocationOnIcon/>
          <span>
          Mumbai, Maharastra
          </span>
        </p>
         <p className='text-gray-500 flex items-center gap-3'>

           <CalendarTodayIcon/>
          <span>
            Mon-Son : 09:00 AM - 09:00 PM(Today)
          </span>
        </p>

       </div>
      </div>

       </section>

    <Divider/>
    <section className='pt-[2rem] lg:flex relative'>
      <div className='space-y-10 l:w-[20%] filter'> 

       <div className='box space-y-5 lg:sticky top-28 '>
        <div>
          <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
            Food Type</Typography>
            <FormControl className='space-y-5 py-10' component={"fieldset"}>
              <RadioGroup onClick={handleFilter} name='food_type' value={foodType}>
                
                {foodTypes.map((item)=>
                  ( <FormControlLabel
                   key={item.value}
                     value={item.value}
                      control={<Radio/>}
                       label={item.label}/>
                      ) )}
              </RadioGroup>

            </FormControl>
        </div>
  
   <Divider/>
      <div>
          <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
            Food Category</Typography>
            <FormControl className='space-y-5 py-10' component={"fieldset"}>
              <RadioGroup onClick={handleFilter} name='food_type' value={foodType}>
                
                {category.map((item)=>
                  ( <FormControlLabel
                   key={item}
                     value={item}
                      control={<Radio/>}
                       label={item}/>
                      ) )}
              </RadioGroup>

            </FormControl>
        </div>

      </div>
      </div>
       <div className='space-y-5 lg:w-[80%] lg:pl-10'> 
        {menu.map((item)=> <MenuCard/>)}
       </div>
    </section>
    </div>
  )
}

export default RestauratDetails
