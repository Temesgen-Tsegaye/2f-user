import React from 'react'
import { Box } from '@mui/material'
import { HeaderClient } from './header_client'
import { RightSide } from './right_side'
export default function Header() {
  return (
    <Box sx={{padding:'4rem',display:'flex',width:'100%',justifyContent:'space-between',
    
      "@media (max-width: 601px)": {
        height:"20vh",
      },

    }}>
        
  <HeaderClient/>



  <RightSide/>
      
    </Box>
  )
}
