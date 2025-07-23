import env from "dotenv"
env.config()
import mongoose from "mongoose";
import { buffer } from "stream/consumers";

const MONGO_URI =process.env.MONGO_URI!;
console.log("Connected to DB:", mongoose.connection.name);

 

let cached  = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn : null ,promise:null }
}


export async function connectDataBase(){
    if(cached.conn){
        return cached.conn;
    }
    if(!cached.promise){
        const opts = {
            bufferCommands :true,
            maxPoolSize : 10,
        }
        cached.promise = mongoose.connect(MONGO_URI,opts)

    }

    try {
        cached.conn = await cached.promise
    } catch (error) {
        cached.promise = null 
        throw error
    }
    return cached.conn;
}