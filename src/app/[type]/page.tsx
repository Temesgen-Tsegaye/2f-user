import React, { Suspense } from 'react'
import { Box } from '@mui/material'
import Header from '@/components/type/header/header'
import  {Body} from '@/components/type/body/body'
import  { getContent} from  "@/lib/types"

import { auth } from '@/auth';

export default  async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    type?:string,
    channel?:string,
    category?:string
  };
}) {

  const query=searchParams?.query
  const type=searchParams?.type
  const channel=searchParams?.channel
  const category=searchParams?.category
  const session=await auth()

  const content =await getContent(Number(session?.user?.id) || 0 ,query,type,channel,category).catch(()=>'')


  return (
    <Box sx={{width:'100vw',backgroundColor:'#100f2e',minHeight:'100vh',display:'flex',flexDirection:'column'}}>

      <Suspense   fallback={<h1>Loading</h1>}>
      <Header/>
      <Body content={content}/>

      </Suspense>
    </Box>
  )
}
