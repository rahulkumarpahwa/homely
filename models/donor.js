const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["Gpay", "PhonePe", "UPI", "Card", "Net-Banking"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 1,
  },
});


module.exports.Donor = mongoose.model("Donor", donorSchema); 

