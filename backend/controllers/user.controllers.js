import userSchema from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await userSchema.findOne({ email });
    if (user) {
      return res.status(404).json({ status: "user is already create" });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const createuser = await userSchema.create({
      fullname,
      email,
      password: hash,
    });
    const token = await jwt.sign(
      { email: createuser.email },
      process.env.JWT_SECRET
    );
    return res.status(200).send({ status: "create user", token: token });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userSchema.findOne({ email });
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    if (result && user.isAdmin === false) {
      const token = await jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET
      );
      return res.status(200).json({ result: "login success", token: token });
    }
    return res.status(300).json({ result: "password is increct" });
  }
  return res.status(404).json({ result: "please register first" });
};

const logout = (req, res) => {
  try {
    return res.status(200).json({
      status: "logout success",
    });
  } catch (error) {
    console.log(error);
  }
};

const adminlogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await userSchema.findOne({ email });
  if (user) {
    const result = await bcrypt.compare(password, user.password);
    if (result && user.isAdmin === true) {
      const token = await jwt.sign(
        { email: user.email },
        process.env.JWT_SECRET
      );

      // res.redirect(`http://localhost:5173/admin/dashbord`);
      return res.status(200).json({ result: "login success", token: token });
    }

    return res.status(300).json({ result: "password is increct" });
  }

  return res.status(404).json({ result: "please register first" });
};
export { register, login, logout, adminlogin };
