"use client"
import React from 'react'
import { Box } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import CloudIcon from "@mui/icons-material/Cloud";
import { TimeCounter } from '../../home/header/timer';
import Image from 'next/image';
import { useSearchParams,usePathname,useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { IoMdLogOut } from "react-icons/io";

export  function RightSide() {


  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace,push } = useRouter();

  const handleSearch = useDebouncedCallback((term:string) => {
 
      const params = new URLSearchParams(searchParams);
       if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    },500);
    
  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'40%'}}>
    
    <Box   sx={{
          "@media (max-width: 601px)": {
            display: "none",
          },}} >
    <CloudIcon/>
    <Box component="span">22&deg;C</Box>
   </Box>
   

   <Box component="span"  sx={{
          "@media (max-width: 601px)": {
            display: "none",
          },}}>

   <TimeCounter  
  type={true} 
  
/>

   </Box>


   
   <input  onChange={(e)=>handleSearch(e.target.value)} type="text" style={{borderWidth:'1px',borderColor:'white',padding:"0.25rem",width:"10rem",backgroundColor:'inherit'}} />
   <SearchIcon  sx={{width:'3rem',height:'3rem', padding:'0.8rem' ,borderRadius:'50%',bgcolor:'#08071a',opacity:0.5}} />

   <IoMdLogOut size={30}  onClick={()=>push('/api/auth/signout')} />
    </Box>
  )
}
