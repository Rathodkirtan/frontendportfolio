import mongoose from "mongoose";

const francise=new mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
  lastname:{
    type:String,
    require:true,
  },
  city:{
    type:String,
    require:true,
  },
  contact:{
    type:Number,
    require:true,
  },
  email:{
    type:String,
    require:true,
  },
  content:{
    type:String,
    require:true,
  }
})

export default mongoose.model('fancise',francise);