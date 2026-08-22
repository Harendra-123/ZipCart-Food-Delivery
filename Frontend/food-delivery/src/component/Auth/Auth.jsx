import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { style } from '../Cart/Cart';
import { Box, Modal } from '@mui/material';

export default function Auth() {

    const location=useLocation();
    const navigate=useNavigate();
    const hanleOnclose=()=>{
    navigate("/")
    }

  return (
    <>
        <Modal onClose={hanleOnclose}
         open={location.pathname==="/account/register" 
            || location.pathname==="/account/login"

        }>

            <Box style={style}>
           Harendra 
            </Box>

        </Modal>
    </>
  )
}
