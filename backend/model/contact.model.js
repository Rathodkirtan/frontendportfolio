import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  contact: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});

export default mongoose.model('contact',contactSchema);