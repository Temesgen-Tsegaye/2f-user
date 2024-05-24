import React from 'react'
import { Box } from '@mui/material'
import { Hero } from './hero'
import { Header } from './header'
export function Main({channel,hero}:{channel:{
  id: number;
  name: string;
  status: boolean;
}[],hero:{
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
} | null}) {

  return (
    <Box sx={{width:'60vw'}}>
         <Header data={channel}/>
      <Hero hero={hero}/> 
    </Box>
  )
}
