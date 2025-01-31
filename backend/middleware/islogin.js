import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userModel from "../model/user.model.js";

dotenv.config();

const isLogin = async (req, res, next) => {
  const token = req.headers.authorization;
  // console.log(token)
  if (!token) {
    return res.status(400).json({ message: "user must login" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ email: decoded.email });
    if(user.isAdmin==true){
      return res.status(400).json({message:"invalid user"})
    }
    req.usertoken = user;
  next();

  } catch (error) {
    return res.status(401).json({message:"invalid token"})
  }

};
export default isLogin;
