import Product from '../models/Product.js';

// Get all products
export const getProducts = async (req, res) => {
    try {
      const products = await Product.find();  // Fetch products from database
      res.json(products);  // Return products in JSON format
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


// Add multiple products
export const addProduct = async (req, res) => {
  const products = [
    {
      name: "T-shirt",
      description: "Travis Scott T-shirt",
      price: 25,
      stock: 100,
      imageUrl: "/t1.jpg"
    },
    {
      name: "T-shirt",
      description: "Anthony T-shirt",
      price: 20,
      stock: 150,
      imageUrl: "/t2.jpg"
    },
    {
      name: "T-shirt",
      description: "Marvin T-shirt",
      price: 18,
      stock: 200,
      imageUrl: "/t3.jpg"
    },
    {
      name: "Hoodie",
      description: "Hoodie 1",
      price: 35,
      stock: 120,
      imageUrl: "/h1.jpg"
    },
    {
      name: "Hoodie",
      description: "Hoodie 2",
      price: 38,
      stock: 80,
      imageUrl: "/h2.jpg"
    },
    {
      name: "Hoodie",
      description: "Hoodie 3",
      price: 40,
      stock: 90,
      imageUrl: "/h3.jpg"
    },
    {
      name: "Jacket",
      description: "Bomber Jacket",
      price: 50,
      stock: 60,
      imageUrl: "/j1.jpg"
    },
    {
      name: "Jacket",
      description: "Jacket 2",
      price: 55,
      stock: 40,
      imageUrl: "/j2.jpg"
    },
    {
      name: "Jacket",
      description: "Jacket 3",
      price: 60,
      stock: 30,
      imageUrl: "/j3.jpg"
    }
  ];

  try {
    const savedProducts = await Product.insertMany(products);  // Insert all products at once
    res.status(201).json(savedProducts);  // Return the saved products
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


