import { Divider,Card,Button,Box,Modal, Grid, TextField } from '@mui/material'
import React from 'react'
import { CartItem } from './CartItem'
import { Address } from './Address';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import {ErrorMessage, Field, Form, Formik} from "formik";
// import * as Yup from "yup";



 export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'gray',
   outline: "none",
  boxShadow: 24,
  p: 4,
};
const initialValues={
  streetAddress:" ",
  state:" ",
  pincode:" ",
  city:" "

}

// const validationSchema=Yup.object.shape({
// streetAddress:Yup.string().required("Street address is required"),
// state:Yup.string().required("State is required"),
// pincode:Yup.required("pincode  is required"),
// city:Yup.string().required("city is required"),

// })


const items=[1,1]; 

 const Cart = () => {
  const createOrderUsingSelectedAddress=()=>{

  }

 const  handleOpenAddressModel=()=>setOpen(true);
   const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit=(value)=>{
    console.log("Valur:",value)

  }
  return (
    <>
        
        <main className='lg:flex justify-between'>
         <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10 '>
           
        {items.map((items)=> <CartItem/>)}
        
         <Divider/>

         <div className='billDetails px-5 text-xs'>
         
          <p className='font-extralight py-5 '>Bill Deetails</p>
            <div className='space-y-3 '>
              <div className='flex  justify-between text-gray-400'>
                <p>Item Total </p>
                <p>₹599</p>
                 </div>

                 <div className='flex  justify-between text-gray-400'>
                <p>Deliver Fee </p>
                <p>₹20</p>
                 </div>

                 <div className='flex  justify-between text-gray-400'>
                <p>GST and Restaurant Charges </p>
                <p>₹5</p>
                 </div>
          <Divider/>
            </div>
            <div className='flex justify-between text-gray-400'>
              <p>Total pay</p>
              <p>₹30200</p>
            </div>
         </div>
          </section>

          <Divider orientation='vertical'flexItem/>
          <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
            <div>
              <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
              <div className='flex gap-5 flex-wrap justify-center'>

                {[1,1,1].map((item)=> (<Address handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>))}

                  <Card className="flex gap-5 w-64 p-5 ">
     <AddLocationAltIcon/>
     <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
     
   <Button variant='outlined' fullWidth  onClick={handleOpenAddressModel}>Add</Button>
     </div>
   </Card>

              </div>
            </div>
          </section>
        </main>


      

      <Modal
  open={open}
  onClose={handleClose}
>
  <Box sx={style}>
      <Formik initialValues={initialValues}
  //  validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
<Grid container spacing={2}>

      <Grid size={12}>
        <Field
        as={TextField}
          name="streetAddress"
          label="Street Address"
          fullWidth
          variant="outlined"
        

        />
      </Grid>

      <Grid size={12}>
        <Field
        as={TextField}
          name="state"
          label="State"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid size={12}>
        <Field
        as={TextField}
          name="city"
          label="City"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid size={12}>
        <Field
        as={TextField}
          name="pincode"
          label="Pincode"
          fullWidth
          variant="outlined"
        />
      </Grid>

      <Grid item xs={12}>
        <Button fullWidth variant='contained' type='onSubmit' color='primary'>Deliver Here </Button>
      </Grid>
    </Grid>
      </Form>
    

    </Formik>
  </Box>
</Modal>
    </>
  )
}

export default Cart;