const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      lowercase: true,
      minLength: 4,
      maxLength: 75,
    },
    lastName: {
      type: String,
      lowercase: true,
    },
    age: {
      type: Number,
      required: false,
      min: 18,
      max: 150,
    },
    email: {
      type: String,
      unique: [true, "Email Must be unique!"],
      required: true,
      validate(mail) {
        if (!validator.isEmail(mail)) {
          throw new Error(`${valid} is not a valid Email!`);
        }
      },
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      maxLength: 200,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
