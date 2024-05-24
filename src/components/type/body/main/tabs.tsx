"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useSearchParams,usePathname,useRouter } from 'next/navigation';

export default function CategoryTabs() {
  const [value, setValue] = React.useState('one');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);

    
      const params = new URLSearchParams(searchParams);
       
       params.set('category', newValue);
       
      replace(`${pathname}?${params.toString()}`);

  };


  
 
    
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={searchParams.get("category")}
        onChange={handleChange}
        variant='scrollable'
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{color:"white",
        "@media (max-width: 601px)": {
          height:"5vh",
        },
        }}
      >
        <Tab sx={{color:"white"}} value="recommended" label="Recomended" />
        <Tab sx={{color:"white"}} value="popular" label="Popular" />
        <Tab sx={{color:"white"}} value="featured" label="Featured" />
        <Tab sx={{color:"white"}} value="favorite" label="Favorites" />
        <Tab sx={{color:"white"}} value="watch later" label="Watch Later" />
      </Tabs>
    </Box>
  );
}
