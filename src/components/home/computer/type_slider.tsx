"use client"
import React from 'react';
import { Box } from '@mui/material';
import { usePathname, useSearchParams } from 'next/navigation';
import  {typeData}  from '@/utils/data/type'
import Image from 'next/image';
import { Typography } from "@mui/material";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Link from 'next/link';
import { MdLocalMovies } from "react-icons/md";
export default function TypeSlider() {
       
              const searchParams=useSearchParams()
              const channel=searchParams.get("channel")||"HBO"
              const router = useRouter();
              const pathname=usePathname()

              const type=searchParams.get("type")

            async  function setPrams(name: string) {
                const params = new URLSearchParams(searchParams);
                params.set("type", name);
                router.replace(`${pathname}?${params.toString()}`);
              }
             
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: '2rem',
        position: 'absolute',
        bottom: '-7.5vw',
        width:'100%',
        left:0,
        whiteSpace: 'nowrap',
        scrollBehavior: 'smooth',
        // Hide scrollbars
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': {
          display: 'none', // Safari and Chrome
        },
      }}
    >
      {/* {Array.from({ length: 21 }).map((_, index) => (
        <Box key={index} sx={{ width: '15vw', height: '18vw', bgcolor: 'yellow', flexShrink: 0 }}>
          Box
        </Box>
      ))} */}
        {typeData.map((items, index) => (

         
          
          <Box
          key={index}
          sx={{
            width: `${items.name==type?'170px':'160px'}`,
            height: `${items.name==type?'180px':'170px'}`,
            flexShrink: 0,
            bgcolor: "#1a1b39",
            padding: "1rem",
            borderRadius:'15px',
            display:'flex',
            flexDirection:'column',
            gap:'1rem',
            border: `${items.name==type?'2px solid #007bff':''}`, /* Solid blue border */
            boxShadow: `${items.name==type?'0 0 5px #007bff':''}`, /* Inner blue glow */
            

          

          }}
          
          onClick={()=>{
              setPrams(items.name).then(()=> router.push(`/${items.name}?channel=${searchParams.get("channel")}&type=${items.name}`))}}
          
        >
          <Box
            sx={{
              bgcolor: "#0f102e",
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius:'10px'
            }}
          >
            <items.icon size={40} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                
              }}
            >
              <Typography sx={{ fontSize: "1rem" }}>{items.name}</Typography>{" "}
              {/* <Box component="span">New</Box> */}
            </Box>
            {/* <Typography >
              {items.numberOfContent}
            </Typography> */}
          </Box>
        </Box>
          
          
       
      ))}
    </Box>
  );
}
