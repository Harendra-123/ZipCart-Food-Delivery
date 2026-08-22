import { Button, Card } from '@mui/material'
import React from 'react'

export default function OrderCard() {
  return (
    <Card className='flex justify-between items-center p-5 '>
        <div className='flex items-center space-x-5'>

            <img className='h-16 w-16' src='https://www.shutterstock.com/image-photo/traditional-chicken-biryani-served-brass-600w-2622739739.jpg' alt='biryani'/>

            <div> 
                <p>Biryani</p> 
                <p>$399</p>
            </div>
        </div>

        <Button desabled className='cursor-not-allowed '>completed</Button>
    </Card>
  )
}
