const mongoose = require('mongoose');
const MenuItemSchema = new mongoose.Schema({
  menuName: {
    type: String,
    required: true,
  },
  name: { // item name
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', MenuItemSchema);
