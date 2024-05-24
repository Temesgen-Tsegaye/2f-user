import SpaIcon from "@mui/icons-material/Spa";
import SearchIcon from "@mui/icons-material/Search";
import CloudIcon from "@mui/icons-material/Cloud";
import Box from "@mui/material/Box";
import Image from "next/image";
import { TimeCounter } from "./timer";

export function MobileHeader() {
  return (
    <Box
      component="section"
      sx={{
        zIndex: 10,
        display: "flex",
        position: "absolute",
        justifyContent: "space-between",
        padding: "1rem",
        width:'100vw',
        fontSize:'0.8rem'
      }}
    >
      <Image width={500} height={500} src="/maple.svg" alt="leaf" 
      style={{
        width:'40px',height:'40px',color:'green'
      }} />{" "}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width:'60%'

        }}
      >
        {" "}
        <Box sx={{ display: "flex", gap: "0.8rem" }}>
          <TimeCounter type={false}/>
          <Box sx={{display:'flex'}}>
            <CloudIcon sx={{marginRight:'0.2rem',marginBottom:'0.2rem'}} />
            <span>22&deg;C</span>
          </Box>
        </Box>{" "}
        <SearchIcon  sx={{width:'2rem',height:'2rem', padding:'0.5rem' ,borderRadius:'50%',bgcolor:'#100f2e',opacity:0.5}} />
      </Box>
    </Box>
  );
}
