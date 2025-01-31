import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const dbconnection = async () => {
  try {
    await mongoose.connect(
      process.env.MongooseUrl
    );
    console.log("connection success");
  } catch (error) {
    console.log(error);
  }
};

export default dbconnection;
