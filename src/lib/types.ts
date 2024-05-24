import { prisma } from "@/config/prisma-client";



async function findTypeIdByName(typeName :string) {
    const type = await prisma.type.findFirst({
      where: {
        name: typeName,
      },
    });
    return type ? type.id : null;
  }
  
  async function findCategoryIdByName(categoryName:string) {
    const category = await prisma.category.findFirst({
      where: {
        name: categoryName,
      },
    });
    return category ? category.id : null;
  }
  
  async function findChannelIdByName(channelName:string) {
    const channel = await prisma.channel.findFirst({
      where: {
        name: channelName,
      },
    });
    return channel ? channel.id : null;
  }
  

export  async function getContent(
    id:number,
  searchQuery:string |undefined,
  type:string |undefined,
  channel:string |undefined,
  category:string |undefined,
 
) {

   
    if(category=='favorite'){
        const favorites = await prisma.favorite.findMany({
            where: {
              userId:id ,
            },
          });
          const contentIds = favorites.map(favorite => favorite.contentId);
          const content = await prisma.content.findMany({
            where: {
              id: {
                in: contentIds,
              },
            },
          });

          return content
    
    }


    if(category=="watch later"){
    
        const favorites = await prisma.watchLater.findMany({
            where: {
              userId:id ,
            },
          });
          const contentIds = favorites.map(favorite => favorite.contentId);
          const content = await prisma.content.findMany({
            where: {
              id: {
                in: contentIds,
              },
            },
          });


          return content
    
    
    
    
    
    }
    

    const typeId = type ? await findTypeIdByName(type) : null;
    const channelId = channel ? await findChannelIdByName(channel) : null;
    const categoryId = category ? await findCategoryIdByName(category) : null;


  let query = {};

  if (searchQuery) {
    query = {
      ...query,
      OR: [
        { title: { contains: searchQuery } },
      ],
    };
  }

  if (typeId) {
    query = {
      ...query,
      typeId,
    };
  }

  if (channelId) {
    query = {
      ...query,
      channelId,
    };
  }

  if (categoryId) {
    query = {
      ...query,
      categoryId,
    };
  }

  // Fetch content based on constructed query
  const contents = await prisma.content.findMany({
    where: query,
  });

  return contents;
}
