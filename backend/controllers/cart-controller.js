import cartSchema from "../model/cart.model.js";

const cart = async (req, res) => {
  const item = await cartSchema.find();
  res.send(item);
};

const cart2 = async (req, res) => {
  const item = await cartSchema.find();
  res.send(item);
};

const Addcategoties = async (req, res) => {
  const { name, categories, price } = req.body;
  console.log(req.body);
  console.log(req.file);
  if (req.file) {
    const cartName = await cartSchema.create({
      name: name,
      category: categories,
      price: price,
      image: {
        moblie: req.file.filename,
      },
    });
    return res.status(200).redirect("http://localhost:5173/admin/cart")
  }
  return res.status(400).json({ success: "file upload not upload" });
};

const cartDelete = async (req, res) => {
  try {
    const cart = await cartSchema.findOneAndDelete({ _id: req.params.id });
    const contact = await cartSchema.find();
    res.status(200).json(contact);
  } catch (error) {
    console.log(error);
  }
};

const cartUpdate = async (req, res) => {
  const { _id, name, category, price } = req.body;
  // console.log(req.file)
  try {
    const updatecart = await cartSchema.findOneAndUpdate(
      { _id: _id },
      { name, category, price },
      { new: true }
    );
    return res.status(200).json({ status: "successfully update" });
  } catch (error) {
    console.log(error);
  }
};

export { cart, Addcategoties, cartDelete, cartUpdate,cart2 };
