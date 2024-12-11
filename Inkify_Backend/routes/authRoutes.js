import express from 'express';  // Import express
import { register, login } from '../controllers/authController.js'; // Import controller functions

const router = express.Router();

// Define routes
router.post('/register', register);  // Route for user registration
router.post('/login', login);        // Route for user login

// Export the router
export default router;
