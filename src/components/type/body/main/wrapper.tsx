import React from 'react'
import { Box } from '@mui/material'
import Tabs from './tabs'
import CardDisplay from './card_display'
export default function Wrapper({content}:{content:string | {
  id: number;
  title: string;
  duration: number;
  description: string;
  channelId: number;
  typeId: number;
  categoryId: number;
  videoUrl: string;
  coverImageUrl: string;
  status: boolean;
}[]}) {
  return (
    <Box sx={{width:'80vw',display:'flex',flexDirection:'column',gap:'2rem',"@media (max-width: 601px)": {
      height:"80vh",
    },}}>

        <Tabs/>
        <CardDisplay content={content}/>

      
    </Box>
  )
}
