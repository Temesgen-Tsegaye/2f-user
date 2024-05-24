import React from 'react'
import { Box } from '@mui/material'
import {MovieCard}  from './card'
export default function CardDisplay({content}:{content:string | {
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
  
  if (!Array.isArray(content)) {
    content = [];
  }
  
  return (
    <Box 
    sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: '2rem',
    
        width:'100%',
         
        whiteSpace: 'nowrap',
        scrollBehavior: 'smooth',
        // Hide scrollbars
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': {
          display: 'none', // Safari and Chrome
        },
        "@media (max-width: 601px)": {
         flexDirection:"column",
         overflowY: 'auto',
         whiteSpace: 'nowrap',
         scrollBehavior: 'smooth',
         height:"75vh"

        }
      }}
    >
        {content.map((item)=> <MovieCard key={item.id} id={item.id} title={item.title} url={item.coverImageUrl} duration={item.duration} />)}
       
    </Box>
  )
}
