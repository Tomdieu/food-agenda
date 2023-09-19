
import getCurrentUser from "@/lib/getCurrentUser"
import prisma from "@/lib/prismadb"

export async function GET(){
    const user = await getCurrentUser();
    const links = await prisma.user.findMany({where:{id:user?.id}});

    return links
}

export async function POST(){

}   