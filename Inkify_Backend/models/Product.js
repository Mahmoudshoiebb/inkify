import mongoose from 'mongoose';  // Using import instead of require

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String }
});

const Product = mongoose.model('Product', productSchema);


export default Product;
