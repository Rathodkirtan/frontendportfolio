import jwt from "jsonwebtoken";
import dotenv, { configDotenv } from "dotenv";
import userModel from "../model/user.model.js";

dotenv.config();

const Adminislogin = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Must login" });
  }

  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ email: decoded.email });
    req.usertoken=user
    if(user.isAdmin==false){
     return res.status(401).json({message:"invalid user"})
    }
    next();
  } catch (error) {
    console.log(error)
  }
};

export default Adminislogin;
