const mongoose = require("mongoose");
const { User } = require("./user");
const validator = require("validator");

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxLength: 200,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      maxLength: 500,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/dwtcjjxwc/image/upload/v1702025115/pic0_hb6pwl.jpg",
      validation(value) {
        if (!validator.isURL(value)) {
          throw new Error("Enter a Valid Image URL");
        }
      },
    },
    address: {
      type: String,
      maxLength: 300,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = { Listing };
