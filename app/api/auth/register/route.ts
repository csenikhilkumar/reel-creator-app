import { NextRequest,NextResponse } from "next/server";
import { connectDataBase } from "@/lib/db";
import User from "@/models/User"
import { error } from "console";



export async function POST(request:NextRequest,response:NextResponse){
    try {
        const {email,password}=await request.json() 
        if(!email || !password){
            return NextResponse.json({
                error:"Email and password are required"
            },
        {
            status:400 
        })
        }
        await connectDataBase()
        const existUser =await User.findOne({email})
        if(existUser){
            return NextResponse.json({
                error:"Email allready exist "
            },
        {
            status:400 
        })
    }

    await User.create({
        email:email,
        password:password,
    })
    return NextResponse.json(
        {"message":"user register sucessFully "},
        {status:200}

    )


    } catch (e) {
        return NextResponse.json({
                error:"failed to register user "
            },
        {
            status:500 
        })
        
    }

}