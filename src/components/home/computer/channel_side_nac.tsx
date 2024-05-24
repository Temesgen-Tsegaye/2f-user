"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { data } from "@/utils/data/channel_image";
import Image from "next/image";
import { Typography } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
export function ChannelScroll({
  channel,
}: {
  channel: {
    id: number;
    name: string;
    status: boolean;
  }[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);

  function setPrams(name: string) {
    const params = new URLSearchParams(searchParams);
    params.set("channel", name);
    replace(`${pathname}?${params.toString()}`);
  }
  console.log(pathname, "ppt");
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        bgcolor: "inherit",

        overflowY: "auto",
        whiteSpace: "nowrap",
        alignItems: "start",
        justifyContent: "center",
        paddingX: "2rem",
        scrollbarWidth: "none" /* Firefox */,
        "&::-webkit-scrollbar": {
          display: "none" /* Safari and Chrome */,
        },
        scrollBehavior: "smooth",
        boxShadow:
          "inset 10px 0 10px -5px rgba(16, 15, 46, 0.5), inset -10px 0 10px -5px rgba(16, 15, 46, 0.5)",
      }}
    >
      {channel.map((items, index) => (
        <Box  

        key={items.id}
          sx={{ display: "flex", alignItems: "center", gap: "0.5rem",pointerOnHover: {
            cursor: 'pointer',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)', 
            },
          }, }}
          onClick={() => {
            setPrams(items.name);
          }}
        >
          <Image
            width={50}
            height={50}
            src={
              items.name
                ? `/channels/${items.name}.svg`
                : `/channels/chdefault.svg`
            }
            alt="Ch"
            style={{
              width: `${items.name == params.get("channel") ? "4rem" : "3rem"}`,
              height: `${
                items.name == params.get("channel") ? "4rem" : "3rem"
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
            className="active:scale-[1.2]"
          />
          <Typography
            sx={{
              fontSize: `${
                items.name == params.get("channel") ? "1.5rem" : "1rem"
              }`,
            }}
          >
            {items.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
