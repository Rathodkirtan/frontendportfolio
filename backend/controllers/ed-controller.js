import userModel from "../model/user.model.js";
import franciseModel from "../model/francise.model.js";
import contactModel from "../model/contact.model.js";

const userDelete = async (req, res) => {
  try {
    const deleteUser = await userModel.findOneAndDelete({ _id: req.params.id });
    const user = await userModel.find();
   res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const franciseDelete = async (req, res) => {
  try {
    const deletefrancise = await franciseModel.findOneAndDelete({ _id: req.params.id });
    const francise = await franciseModel.find();
    res.status(200).json(francise);
  } catch (error) {
    console.log(error);
  }
};
const contactDelete = async (req, res) => {
  try {
    const deletecontact = await contactModel.findOneAndDelete({ _id: req.params.id });
    const contact = await contactModel.find();
    res.status(200).json(contact);
  } catch (error) {
    console.log(error);
  }
};

const franchiseUpdate=async(req,res)=>{
  const {_id,name,lastname,city,contact,email,content}=req.body;
  try {
    const updateUser=await franciseModel.findOneAndUpdate({_id:_id},{name,lastname,city,contact,email,content},{new:true})
    return res.status(200).json({status:"successfully update"});
  } catch (error) {
    console.log(error)
  }
}

const contactUpdate=async(req,res)=>{
  const {_id,name,lastname,contact,email,content}=req.body;
  try {
    const updateUser=await contactModel.findOneAndUpdate({_id:_id},{name,lastname,contact,email,content},{new:true})
    return res.status(200).json({status:"successfully update contact"});
  } catch (error) {
    console.log(error)
  }
}

const userUpdate=async(req,res)=>{
  const {_id,fullname,email,contact,address}=req.body;
  try {
    const updateUser=await userModel.findOneAndUpdate({_id:_id},{fullname,email,contact,address},{new:true})
    return res.status(200).json({status:"successfully update user"});
  } catch (error) {
    console.log(error)
  }
}

export { userDelete,franciseDelete ,contactDelete,franchiseUpdate,contactUpdate,userUpdate};
