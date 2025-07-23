import mongoose, { model, models, Schema } from "mongoose";
import bcrypt from "bcrypt"


interface user {
    email : string;
    password : string ;
    _id? : mongoose.Types.ObjectId;
    createAt? : Date;
    updateAt? : Date;

}

const userSchema = new Schema <user>({
    email : {type:String , required :true , unique :true},
    password : {type:String,required:true}
    },
    {
        timestamps:true
    }

)

userSchema.pre("save",async function (next){
     if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10)

     }
     next()
})


const User =models?.User ||  model<user>("User", userSchema)


export default User;