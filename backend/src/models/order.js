const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }],
  quantities: [{
    type: Number,
    required: true
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  total: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema);
