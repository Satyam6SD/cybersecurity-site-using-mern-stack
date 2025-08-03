const mongoose = require('mongoose');

const SubscriberSchema = new mongoose.Schema({
  email: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Subscriber', SubscriberSchema);
