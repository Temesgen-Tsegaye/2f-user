import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
export  function HeroMobile() {
  return (
    <Box  sx={{height:'45vh',bgcolor:'green',position:'relative',top:0,left:0,marginBottom:'1rem'
    }}>

        <Box sx={{width:'100%',height:'100%',position:'absolute',display:'flex',justifyContent:'end',
        background:'linear-gradient(to bottom right, rgba(16, 15, 46, 1), rgba(16, 15, 46, 0) 40%, rgba(16, 15, 46, 0.6) 100%)'}}>
        </Box>
        <Box sx={{width:'100%',height:'100%',position:'absolute',display:'flex',justifyContent:'end',
        background:'linear-gradient(to top, rgba(16, 15, 46, 1), rgba(16, 15, 46, 0.1) 30%, rgba(16, 15, 46, 0.2) 100%)'}}>
        </Box>
        <Box sx={{width:'100%',height:'100%',position:'absolute',display:'flex',justifyContent:'end',
        background:'linear-gradient(to right, rgba(16, 15, 46, 1), rgba(16, 15, 46, 0.6) 20%, rgba(16, 15, 46, 0.2) 100%)'}}>
      
        </Box>
      <Image 
         
         src="/fox.jpg"
         alt='fox.jpg'
         sizes="100vw"
         width={500}
         height={500}
         // Make the image display full width
         style={{
           width: '100%',
           height: '100%',
           objectFit:'cover'
        

         }}
        
      />

    </Box>
  )
}
