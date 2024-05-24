
import { prisma } from "@/config/prisma-client";

export async function fetchChannels(){

    
const value= await prisma.channel.findMany()
return value

}


export async function fetchContentBasedOnChannel(name:string){

    const channel =await prisma.channel.findFirst({
            where:{
                name:name
            }        
})
    if(channel?.id){
        
        return await prisma.content.findUnique({
            where:{
                id:1,
            }
        })
    }

     return await prisma.content.findFirst({
        where:{
            channelId:channel?.id
        }
     })

     
}










