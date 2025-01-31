import ContactSchema from '../model/contact.model.js'
import franciseSchema from '../model/francise.model.js'
import userSchema from '../model/user.model.js'

const Admincontact=async (req,res)=>{
  const contact=await ContactSchema.find();
  res.status(200).json(contact);
}

const Adminfranchise=async(req,res)=>{
  const userfrancise=await franciseSchema.find();
  res.status(200).json(userfrancise);
}

const Adminuser=async(req,res)=>{
  const data=await userSchema.find();
  res.status(200).json(data)
}

const Adminprofile=async(req,res)=>{
  const data=await userSchema.findOne({email:req.usertoken.email});
  res.status(200).json(data)
}

export {Admincontact,Adminfranchise,Adminuser,Adminprofile};