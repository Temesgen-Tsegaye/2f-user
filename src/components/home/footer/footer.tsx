import React from "react";
import { Box } from "@mui/material";
import { FaStar } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        bgcolor: "#141331",
        height: "8vh",
        alignItems: "center",
        fontSize: "1.5rem",
      }}
    >
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
  );
}
