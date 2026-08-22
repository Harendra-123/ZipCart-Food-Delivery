import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function EventCard() {
  return (
    <div>
        <Card >
            <CardMedia sx={{height:345}}
             image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4G63858RMo3_Y3yFZ9EIXTTNPgdCi2StZotHRSkITn3uYHHv3lo0ZQXPq&s=10' />
       
            <CardContent> 
                <Typography variant='h5'>  
                    Indian Fast Food
                </Typography>

                  <Typography variant='body2'>  
                   50% of your first order
                </Typography>

                <div className='py-2 space-y-2 '>
                    <p>{"mumbai"}</p>
                    <p className='text-sm text-blue-500 '> September 22, 2026 12 : 00 AM </p>
                     <p className='text-sm text-red-500 '> September 30, 2026 12 : 00 PM </p>
                </div>

            </CardContent>

          {  true  &&  <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>
            }

        </Card>
    </div>
  )
}
