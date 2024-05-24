"use client"
import React from 'react'
import { Box, Typography } from '@mui/material'
import { IoIosArrowBack } from "react-icons/io";
import { useSearchParams,useRouter } from 'next/navigation';
export  function HeaderClient() {

          const searchParams=useSearchParams()
          const router=useRouter()
  return (
    <Box sx={{display:'flex',alignItems:'center'}}>
      <IoIosArrowBack onClick={()=>router.push('/')} style={{padding:'0.8rem',borderRadius:'50%',backgroundColor:'#08071a',width:'3rem',height:'3rem'}}/>
      <Typography sx={{fontWeight:600,fontSize:"1.5rem"}}>{searchParams.get("type")}</Typography>
    </Box>
  )
}
