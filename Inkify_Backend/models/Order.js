import mongoose from 'mongoose'; // Use ESM import

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User model
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Reference to Product model
      quantity: { type: Number } // Quantity of each product
    }
  ],
  totalPrice: { type: Number, required: true }, // Total price of the order
  status: { type: String, default: 'Pending' } // Order status with default value
});

// Create and export the Order model
const Order = mongoose.model('Order', orderSchema);
export default Order;
