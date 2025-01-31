import orderschema from "../model/order.model.js";
import crypto from "crypto";
import userModel from "../model/user.model.js";
import cartModel from "../model/cart.model.js";

const orderController = async (req, res) => {
  const {
    orderdata,
    total,
    name,
    pincode,
    contact,
    locality,
    address,
    city,
    state,
    orderproduct,
  } = req.body;
  console.log(req.usertoken);
  const orderId = crypto.randomInt(10000000, 99999999).toString();
  const order = await orderschema.create({
    orderid: orderId,
    orderdata,
    total,
    name,
    pincode,
    contact,
    locality,
    address,
    city,
    state,
    orderproduct,
  });

  if (
    orderproduct.length == 0 ||
    !total ||
    !name ||
    !pincode ||
    !contact ||
    !locality ||
    !address ||
    !city ||
    !state ||
    !orderproduct
  ) {
    return res.status(400).json({ json: "add item" });
  }

  const custorder = await userModel.findOneAndUpdate(
    { email: req.usertoken.email },
    { ordercust: orderproduct },
    { new: true }
  );
  // req.usertoken.ordercust.push(orderproduct)

  return res.status(200).json({ json: "submit order successfully" });
};

const fetchorder = async (req, res) => {
  const order = await orderschema.find();
  res.status(200).send(order);
};

const addDate = async (req, res) => {
  const { _id, date } = req.body;
  console.log(_id, date);
  const orderuser = await orderschema.findOneAndUpdate(
    { _id },
    { deliverydate: date },
    { new: true }
  );
  res.send(orderuser);
};

const orderapi = async (req, res) => {
  const user = await userModel.findOne({ email: req.usertoken.email });
  const orderspro = await Promise.all(
    user.ordercust.map(async (item) => {
      const data = await cartModel.findById(item);
      return data;
    })
  );
  res.status(200).json({ message: "order data fetch succesfully",orderdata:orderspro });
};

export { orderController, fetchorder, addDate, orderapi };
