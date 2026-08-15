import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';




const demo = [
    {
        category: "Nuts & Seeds",
        ingredients: ["Cashews"]
    },

    {
        category: "Protein",
        ingredients: ["Protein", "Bacon strips", "Ground beef"]
    }

]

export const MenuCard = () => {

    const handleCheckBoxChange=(value)=>{
      console.log("value");
    }
    return (
        <div>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">
                        <div className='lg:flex items-center justify-between'>
                            <div className='lg:flex items-center lg:gap-5'>
                                <img
                                    className='w-[7rem] h-[7rem] object-cover'
                                    src='https://images5.alphacoders.com/433/433534.jpg' alt='' />

                                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                                    <p className='font-semibold text-xl'>Burger</p>
                                    <p>₹ 499</p>
                                    <p className='text-gray-400 '> Nice food</p>
                                </div>
                            </div>


                        </div>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <form>
                        <div className='flex gap-5 flex-wrap'>
                            {

                                demo.map((item) =>

                                    <div>
                                        <p>{item.category}</p>
                                        <FormGroup>
                                            {item.ingredients.map((item) => <FormControlLabel control={<Checkbox onChange={()=> handleCheckBoxChange(item)}  />} label={item} />)}

                                        </FormGroup>
                                    </div>
                                )
                            }
                        </div>

                        <div className='pt-5'>
                            <Button variant='contained' disabled={false} type='submit'>
                                {true ? " Add to Cart" : " Out of Stock"}
                            </Button>
                        </div>
                    </form>


                </AccordionDetails>
            </Accordion>

        </div>
    )
}
