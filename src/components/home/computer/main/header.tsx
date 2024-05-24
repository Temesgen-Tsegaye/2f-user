"use client"
import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
// import { data } from "@/utils/data/channel_image";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { TimeCounter } from "@/components/home/header/timer";
import SearchIcon from "@mui/icons-material/Search";
import CloudIcon from "@mui/icons-material/Cloud";
export function Header({data}:{data:{
  id: number;
  name: string;
  status: boolean;
}[]}) {
  const searchParams = useSearchParams();
  const [channel] = data.filter(
    (items) => items.name == searchParams.get("channel")
  );
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 10,
        display: "flex",
        justifyContent: "space-between",
        width: "60vw",
        height: "10vh",
        
      }}
    >
      <Image
        width={100}
        height={100}
        alt="aaa"
        src={`/channels/${channel?.name}.svg`}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems:'center',
                    width: "60%",
            gap:'4rem',
            padding:'2rem'
        }}
      >
        {" "}
        <Box sx={{ display: "flex", gap: "0.8rem" }}>
          <TimeCounter  type={false}/>
          <Box sx={{ display: "flex" }}>
            <CloudIcon sx={{ marginRight: "0.2rem", marginBottom: "0.2rem" }} />
            <span>22&deg;C</span>
          </Box>
        </Box>{" "}
        <SearchIcon
          sx={{
            width: "2rem",
            height: "2rem",
            padding: "0.5rem",
            borderRadius: "50%",
            bgcolor: "#100f2e",
            opacity: 0.5,
          }}
        />
      </Box>
    </Box>
  );
}
