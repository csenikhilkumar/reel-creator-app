import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { connectDataBase } from "./db";
import User from "@/models/User";
import bcrypt, { compare } from "bcrypt"

export const authOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider ({
            name : "Credentials",
            credentials : {
                email : {label:"Email",type:"text"},
                password : {label:"password",type:"text"},

            },
            async authorize(credentials){

                if(!credentials?.email || !credentials?.password){
                    throw new Error("email or password are missing")
                }

                try {
                    await connectDataBase()
                    const user = await User.findOne({email:credentials.email})
                    if(!user){
                        throw new Error("no user found ")
                    }
                    const isValid = await bcrypt.compare(credentials.password,user.password)
                    if(!isValid){
                        throw new Error ("entered password is wrong ")
                    }
                    return {
                        id : user._id.toString(),
                        email : user.email
                    }
                } catch (error) {
                    throw error
                }
            }
        })
    ],
    callbacks : {
        async jwt({token, user}){
            if(user){
                token.id  = user.id
            }
            return token
        },
        async session({session,token}){
            if(session.user){
                session.user.id = token.id as string

            }
            
            return session
        }
    },
    pages : {
        signIn : "/login",
        error  : "/login"
    },
    session:{
        strategy : "jwt",
        maxAge   :  30 * 24 * 60 * 60 
    },
    secret : process.env.NEXTAUTH_SECRET

}