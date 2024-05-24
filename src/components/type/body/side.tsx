import React from 'react'
import { Box } from '@mui/material'
import { PiTelevisionLight } from "react-icons/pi"
import { FaStar } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
export  function Side() {


  return (
    <Box sx={{width:'20vw',display:'flex',flexDirection:'column',justifyContent:'center',gap:'2rem',"@media (max-width: 601px)": {
      display: "none",
    }}}>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',   padding:"1rem",borderRadius:"50%",bgcolor:"#1e184a",width:"50px",height:"50px"}}>

     <PiTelevisionLight size={30} />
    </Box>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',padding:"1rem",borderRadius:"50%",bgcolor:"#1e184a",width:"50px",height:"50px"}}>

      <FaStar size={30} />
      </Box>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',padding:"1rem",borderRadius:"50%",bgcolor:"#1e184a",width:"50px",height:"50px"}}>

      <BiSolidTimeFive size={30} />
      </Box>
    </Box>
  )
}
