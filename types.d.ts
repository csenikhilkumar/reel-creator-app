import { Connection } from "mongoose"

declare global {
    var mongoose:{
        conn : Connection | null ,
        promise : Promise <Promise> | null  
    }
}

export {}