import franciseModel from "../model/francise.model.js";

const francise = async (req, res) => {
  const { name, lastname, city, contact, email, content } = req.body;
  const contactuser=await franciseModel.findOne({email});
  if(contactuser){
    return res.status(404).json({success:"already submit data"});
  }

  const francisequire=await franciseModel.create({ name, lastname, city, contact, email, content });
  return res.status(200).json({success:"fracisequire success"});
};

export default francise;
