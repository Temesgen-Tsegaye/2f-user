"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import { typeData } from "@/utils/data/type";
import Image from "next/image";
import { useSearchParams,useRouter ,usePathname} from "next/navigation";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import Link from "next/link";
export default function MobileTypeScroll() {


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
        display: "flex",
        alignItems:'center',
        gap: "1rem",
        bgcolor: "inherit",
        width: "100vw",
        overflowX: "auto",
        whiteSpace: "nowrap",
        marginTop: "0.5rem",
        scrollbarWidth: "none" /* Firefox */,
        "&::-webkit-scrollbar": {
          display: "none" /* Safari and Chrome */,
        },
        scrollBehavior: "smooth",
        paddingX:'1rem',
        
        
      }}
    >
      {typeData.map((items, index) => (


<Box
          key={index}
          sx={{
            width: `${'160px'}`,
            height: `${'170px'}`,
            flexShrink: 0,
            bgcolor: "#1a1b39",
            padding: "1rem",
            borderRadius:'15px',
            display:'flex',
            flexDirection:'column',
            gap:'1rem',
            
            

          

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
          
          <items.icon size={40}/>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                
              }}
            >
              <Typography sx={{ fontSize: "1rem" }}>{items.name}</Typography>{" "}
            </Box>
           
          </Box>
        </Box>
       
      ))}
    </Box>
  );
}
