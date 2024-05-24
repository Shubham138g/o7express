import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    autoId:{
        type:Number,
        default:0
    },
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
    status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const userModel=mongoose.model('user',UserSchema);

export default userModel;