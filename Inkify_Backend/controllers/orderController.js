import Order from '../models/Order.js'; // Import the Order model

// Create a new order
export const createOrder = async (req, res) => {
    const { userId, products, totalPrice } = req.body;
    const order = new Order({ userId, products, totalPrice });
    try {
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get orders for a user
export const getOrders = async (req, res) => {
    const { userId } = req.params;
    try {
        const orders = await Order.find({ userId });
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
