import mongoose from 'mongoose'

const cartSchema=new mongoose.Schema({
  id:{
    type:Number,
    require:true
  },
  image:{
    moblie:{
      type:String,
      require:true
    }
  },
  name:{
    type:String,
    require:true
  },
  category:{
    type:String,
    require:true
  },
  price:{
    type:Number,
    require:true
  },
  isValid:{
    type:Boolean,
    default:false
  }
})

export default mongoose.model('cart',cartSchema);