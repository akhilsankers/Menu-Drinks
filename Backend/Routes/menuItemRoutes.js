const express = require('express');
const router = express.Router();
const MenuItem = require("../Model/MenuItem");
const Menu = require("../Model/Menu");

// Create a new Menu Item
router.post('/', async (req, res) => {
  try {
    const { menuName, name, price, description } = req.body;

    const menu = await Menu.findOne({ menuName });
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    const newItem = new MenuItem({
      menuName,
      name,
      price,
      description
    });

    await newItem.save();

    res.status(201).json({ message: "Menu item added successfully", item: newItem });
  } catch (error) {
    console.error("Error adding menu item:", error);
    res.status(500).json({ message: "Failed to add menu item" });
  }
});

// Get all Menu Items
router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.status(200).json(items);
  } catch (err) {
    console.error("Error fetching menu items:", err);
    res.status(500).json({ message: "Failed to fetch menu items" });
  }
});

module.exports = router;
