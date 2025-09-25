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
      type: [String], // array of string
      default: [
        "https://res.cloudinary.com/dwtcjjxwc/image/upload/v1702025115/pic0_hb6pwl.jpg",
      ],
      validation(value) {
        if (!validator.isURL(value)) {
          throw new Error("Enter a Valid Image URL");
        }
      },
    },
    street: {
      type: String,
      maxLength: 300,
      required: true,
      unique: true, // based upon it is found the listing is unique or not!
    },
    location: {
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      postalcode: {
        type: String,
        required: true,
        maxLength: 6,
        minLength: 6,
      },
      country: {
        type: String,
        required: true,
      },
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
    map: {
      lat: {
        type: String,
      },
      lon: {
        type: String,
      },
      boxbounding: {
        type: [String],
        validation(value) {
          if (value.length != 4) {
            throw new Error("Box Bounding Must contain the four values!");
          }
        },
      },
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = { Listing };
