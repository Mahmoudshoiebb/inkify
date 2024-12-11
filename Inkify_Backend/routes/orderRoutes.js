import express from 'express'; // Use ESM import for express
import { createOrder, getOrders } from '../controllers/orderController.js'; // Import controller functions

const router = express.Router();

// Define routes
router.post('/', createOrder); // Route to create a new order
router.get('/:userId', getOrders); // Route to get orders for a user

// Export the router as the default export
export default router;
