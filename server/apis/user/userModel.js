import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:''
    },
})

const userModel=mongoose.model('user',UserSchema);

export default userModel;