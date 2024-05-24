import Image from "next/image";

import { MobileHeader } from "@/components/home/header/mobile";
import { HeroMobile } from "@/components/home/Hero/hero_mobile";
import MobileChannelScroll from "@/components/home/channel_slider/mobile_channel_slider";
import MobileTypeScroll from "@/components/home/category_slider/category_slider";
import Footer from "@/components/home/footer/footer";
import { Main } from "@/components/home/computer/main/main";
import { ChannelScroll} from "@/components/home/computer/channel_side_nac";
import { CategoryNav } from "@/components/home/computer/category_side_nav";
import { Box } from "@mui/material";
import { fetchChannels ,fetchContentBasedOnChannel} from "@/lib/homepage";
import { Suspense } from "react";
export default async  function Home({
  searchParams,
}: {
  searchParams?: {
    channel?: string;
    type?: string;
  };
}) {
  let channels
  const channel = searchParams?.channel || '';
  let heroContent
                           try{

                               channels=await fetchChannels()
                               heroContent=await fetchContentBasedOnChannel(channel)
                               
                           }catch(e){

                            return <></>
                           }
   
  return (
    <Box component="main" sx={{ bgcolor: "#100f2e" }}>

    

      <Suspense key={channel} fallback={<Box>Loading...</Box>}>
      <Box
        sx={{
          "@media (min-width: 601px)": {
            display: "none",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <MobileHeader />
        <HeroMobile />
        {/* <MobileChannelScroll channel={channels} /> */}
        <MobileTypeScroll />
        <Footer />
      </Box>

      <Box
        sx={{
          "@media (max-width: 601px)": {
            display: "none",
          },
          display: "flex",
          height: "100vh",
          width:'100vw'
        }}
      >
        <CategoryNav  />
        <ChannelScroll  channel={channels} />
        <Main hero={heroContent} channel={channels}   />
      </Box>
      </Suspense>
   
    </Box>
  );
}
