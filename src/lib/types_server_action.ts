"use server"
import { prisma } from "@/config/prisma-client";
import { revalidatePath } from "next/cache";
export async function watchLater(userId:any,contentId:number,path:string){
       console.log(userId,contentId,path)
     const watch=await prisma.watchLater.create({
        data:{
            contentId,
            userId:Number(userId)
        }
     })


     revalidatePath(`${path}`)
    
}
export async function favorite(userId:any,contentId:number,path:string){

     const watch=await prisma.favorite.create({
        data:{
            contentId,
            userId:Number(userId)
        }
     })


     revalidatePath(`${path}`)
    
}