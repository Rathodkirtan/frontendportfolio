import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  fullname:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
  },
  ordercust:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"order"
  }],
  isAdmin:{
    type:Boolean,
    default:false,
  }
})

export default mongoose.model('user',userSchema);