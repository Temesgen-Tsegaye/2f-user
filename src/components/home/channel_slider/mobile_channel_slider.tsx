"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { data } from "@/utils/data/channel_image";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams,usePathname,useRouter } from "next/navigation";
export default function MobileChannelScroll({channel}:{channel:{
  id: number;
  name: string;
  status: boolean;
}[]}) {
  
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  function setPrams(name: string) {
    const params = new URLSearchParams(searchParams);
    params.set("channel", name);
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <Box
      sx={{

        height: "10vh",
        display: "flex",
        gap: "1rem",
        bgcolor: "inherit",
        width: "100vw",
        overflowX: "auto",
        whiteSpace: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        paddingX: "2rem",
        scrollbarWidth: "none" /* Firefox */,
        "&::-webkit-scrollbar": {
          display: "none" /* Safari and Chrome */,
        },
        scrollBehavior: "smooth",
        // boxShadow: 'inset 10px 0 10px -5px rgba(16, 15, 46, 0.5), inset -10px 0 10px -5px rgba(16, 15, 46, 0.5)'
      }}
      
    >
     

      {channel.map((items, index) => (
         <Box  key={items.id}>
          <Image
            width={20}
            height={20}
            src={
              items.name
                ? `/channels/${items.name}.svg`
                : `/channels/chdefault.svg`
            }
            alt="Ch"
            style={{
              width: `${items.name == params.get("channel") ? "2rem" : "1rem"}`,
              height: `${
                items.name == params.get("channel") ? "2rem" : "1rem"
              }`,
              borderRadius: "50%",
              borderColor: `${
                items.name == params.get("channel")
                  ? "rgba(99,102,241,0.5)"
                  : ""
              }`,
              borderWidth: `${
                items.name == params.get("channel") ? "3px" : ""
              }`,
              color: "white",
              padding: "0.5rem",
              background: "rgb(30 27 75)",
              opacity: 0.8,
              transition: "transform 0.2s ease-in-out",
            }}
          />

         </Box>
        
       
      ))}
    </Box>
  );
}
