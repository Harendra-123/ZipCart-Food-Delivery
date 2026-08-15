import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar, IconButton, Card, Chip } from "@mui/material";

export default function RestaurantCard() {
    return (
        <div>
            <Card className='w-[18rem]'>

                <div className={`${true ? 'cursor-pointer ' : "cursor-not-allowed"} relative`}>
                    <img className="w-full h-[10rem] rounded-t-md object-cover"
                        src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?cs=srgb&dl=pexels-quark-studio-1159039-3201921.jpg&fm=jpg" alt=" " />

                    <Chip size="small"
                        className="absolute top-2 left-2 "
                        color={true ? " success" : "error"}
                        label={true ? " open" : "Close"}

                    />
                </div>
                <div className='p-4 textPart lg:flex w-full justify-between'>
                    <div className='space-y-1'>
                        <p className='font-semibold text-lg '>Indian Fast , Food</p>
                        <p className='text-gray-500 text-sm'>
                            Craving it all ? Dive into our global flag....
                        </p>

                    </div>

                    <div className=''>
                        <IconButton>
                            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        </IconButton>
                    </div>

                </div>
            </Card>
        </div>
    )
}
