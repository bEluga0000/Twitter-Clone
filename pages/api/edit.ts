import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PATCH') {
        res.status(405).end()
    }
    try {
        const {currentUser} = await serverAuth(req,res)
        // console.log(currentUser)
        const {name,username,bio,profileImage,coverImage} = req.body
        if(!name || !username)
        {
            throw new Error ("Missing Fields")
        }
        const updatedUser = await prisma?.user.update({
            where:{
                id:currentUser.id
            },
            data:{
                name,
                username,
                bio,
                profileImage,
                coverImage
            }
        })
        return res.status(201).json(updatedUser)
    } catch (e) {
        console.log(e)
        res.status(400).end()
    }
}