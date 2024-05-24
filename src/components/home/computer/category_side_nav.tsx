import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
export  function CategoryNav() {
  return (
    <Box sx={{  paddingY: "2rem",height:'100vh',width:'10%',padding:'2rem' }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height:'50vh',
          alignItems:'center'
        }}
      >
        <Image
          width={500}
          height={500}
          src={`/maple.svg`}
          alt="ff"
        />

        <Box sx={{display:'flex',flexDirection:'column',gap:'1rem'}}>
        <Box sx={{width:'3rem',height:'3rem',borderRadius:'50%',bgcolor:'#223a5a',display:'flex',justifyContent:'center',alignItems:'center' }}>
        <FaStar />
      </Box>
      <Box sx={{width:'3rem',height:'3rem',borderRadius:'50%',bgcolor:'#223a5a',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <MdAccessTimeFilled />
      </Box>
      <Box sx={{width:'3rem',height:'3rem',borderRadius:'50%',bgcolor:'#223a5a',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <MdAccessTimeFilled />
      </Box>
        </Box>
      </Box>
    </Box>
  );
}
