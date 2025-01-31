import crypto from "crypto";
import nodemailer from "nodemailer";
import userModel from "../model/user.model.js";
import bcrypt from 'bcrypt'

const sendotp = async (req, res) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    console.log("user is not found");
    return res.status(400).json({ message: "user register first" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "kirtan12082004@gmail.com",
      pass: "rpng nlhy gcph knbv",
    },
  });

  try {
    const otp = crypto.randomInt(100000, 999999).toString();
    const info = await transporter.sendMail({
      from: '"Frese Food online 🍔" <kirtan12082004@gmail.com>',
      to: email,
      subject: "verify OTP",
      text: `Don't share otp :${otp}`,
      html: "<b>Don't share otp :</b>" + otp,
    });
    return res.status(200).json({ message: "OTP send successfully", otp: otp });
  } catch (error) {
    console.log(error);
  }
};

const verifyotp =async (req, res) => {
  const { email, passotp, otp,password } = req.body;
  // console.log(email,password,passotp,otp)
  if (passotp == otp) {

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    const user=await userModel.findOneAndUpdate({email},{password:hash},{new:true})

    return res.status(200).json({ message: "forget password successfully" });
  }
  return res.status(400).json({ message: "invlid otp" });
};
export { sendotp, verifyotp };
