import { authOptions } from "@/lib/auth";
import { connectDataBase } from "@/lib/db";
import Video, { IVideo } from "@/models/Video";
import NextAuth, { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        await connectDataBase()
        const videos = await Video.find({}).sort({craetedAt : -1 }).lean()
        if(!videos || videos.length === 0){
            return NextResponse.json([],{status:200})
        }
        return NextResponse.json(videos)
    } catch (error) {
        return NextResponse.json({
            error : "failed to fetch videos "
        },{status : 200})
    }
}


export async function POST (request : NextRequest){
    try {
        const session = await getServerSession(authOptions)
        if(!session){
            return NextResponse.json(
                {error:"unauthorized access "},
                {status : 401}
            )
        }
        await connectDataBase()
        const body:IVideo =  await request.json()
        if(!body.title || !body.description || !body.videoUrl || !body.thumbnailUrl){
            return NextResponse.json(
                {error:"missing required fileds "},
                {status : 401})
        } 
        const videoData = {
            ...body,
            controls : body.controls ?? true ,
            transformation : {
                hieght : 1920,
                width : 1080,
                quility : body.transformation?.quality ??  100 
            } 
        }
        const newVideo = await Video.create(videoData)
        return NextResponse.json(
            {error : "failed to create a video "}
        )
    } catch (error) {
        
    }

}