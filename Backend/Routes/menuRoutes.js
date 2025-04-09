const express = require('express');
const router = express.Router();
const Menu = require("../Model/Menu");

// Get all Menus
router.get('/', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json(menus);
  } catch (err) {
    console.error("Error fetching menus:", err);
    res.status(500).json({ message: "Failed to fetch menus" });
  }
});

// Create a new Menu
router.post('/', async (req, res) => {
  try {
    const { menuName, description } = req.body;

    const exists = await Menu.findOne({ menuName });
    if (exists) {
      return res.status(400).json({ message: "Menu with this name already exists" });
    }

    const newMenu = new Menu({ menuName, description });
    await newMenu.save();

    res.status(201).json({ message: "Menu created successfully", menu: newMenu });
  } catch (error) {
    console.error("Error saving menu:", error);
    res.status(500).json({ message: "Failed to create menu" });
  }
});

module.exports = router;
