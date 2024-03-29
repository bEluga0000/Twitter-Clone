import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    // console.log("I am hittting")
    if(req.method!=='GET')
    {
        return res.status(405).end()
    }
    try{
        const {userId} = req.query
        if(!userId || typeof(userId)!=='string')
        {
            throw new Error('Invalid UserId')
        }
        const user = await prisma?.user.findUnique({
            where:{
                id:userId
            }
        })
        const followersCount = await prisma?.user.count({
            where:{
                followingIds:{
                    has:userId
                }
            }
        })
        // console.log(user)
        return res.status(200).json({...user,followersCount})
    }catch(e)
    {
        console.log(e)
        return res.status(400).end()
    }
}