const express = require("express");
const { userAuth } = require("../middlewares/auth");
const {
  validateNewListing,
  validateEditListing,
} = require("../utils/validation");
const { Listing } = require("../models/listing");
const listingRouter = express.Router();
const axios = require("axios");

listingRouter.post("/create", userAuth, async (req, res) => {
  try {
    const owner = req.user._id;
    validateNewListing(req);
    // future : add the validation that the current listing exist previously or not!
    const newListing = new Listing({ ...req.body, owner });
    await newListing.save();
    res.json({ success: true, status: 200, message: newListing });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});

listingRouter.get("/yourlistings", userAuth, async (req, res) => {
  try {
    const user = req.user;
    const findListings = await Listing.find({ owner: user._id }).populate(
      "owner",
      "firstName lastName"
    );
    if (!findListings) {
      throw new Error("Listings does not Exist!");
    }
    res.json({
      success: true,
      status: 200,
      length: findListings.length,
      message: findListings,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});

listingRouter.patch("/editlisting/:listingId", userAuth, async (req, res) => {
  try {
    const listingId = req.params.listingId;
    if (!listingId) {
      throw new Error("Listing ID does not exist!");
    }
    let findListing = await Listing.findById({ _id: listingId });
    if (!findListing) {
      throw new Error("Listing Does not Exist!");
    }
    validateEditListing(req);
    const ALLOWED_EDITS = [
      "title",
      "description",
      "imageUrl",
      "street",
      "location",
    ];
    const isAllowed = Object.keys(req.body).every((key) =>
      ALLOWED_EDITS.includes(key)
    );
    if (!isAllowed) {
      throw new Error("Listing Edit is Not Allowed!");
    }

    const { title, description, imageUrl, street, location } = req.body;
    const updatedList = await Listing.updateOne({
      title,
      description,
      imageUrl,
      street,
      location,
    });
    res.json({
      success: true,
      status: 200,
      message: "Listing has been Updated!",
      updatedList,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});

listingRouter.delete(
  "/deletelisting/:listingId",
  userAuth,
  async (req, res) => {
    try {
      const listingId = req.params.listingId;
      if (!listingId) {
        throw new Error("Listing Id does not Exist!");
      }
      const findListing = await Listing.findById({ _id: listingId });
      const userId = req.user._id;
      if (!userId.equals(findListing.owner._id)) {
        throw new Error("Listing Owner Not valid!");
      }
      if (!findListing) {
        throw new Error("Listing does not Exist!");
      }
      const deletedListing = await Listing.findByIdAndDelete({
        _id: listingId,
      });

      res.json({
        success: true,
        status: 200,
        message: "Listing has been Deleted!",
        deletedListing,
      });
    } catch (error) {
      res
        .status(400)
        .json({ success: false, status: 400, message: error.message });
    }
  }
);

listingRouter.get("/getcoordinates", userAuth, async (req, res) => {
  try {
    const { street, city, state, country, postalcode } = req.body;
    // pending : add sanitation and validation
    const response = await axios.get(
      `https://geocode.maps.co/search?street=${street}&city=${city}&state=${state}&postalcode=${postalcode}&country=${country}&api_key=${process.env.MAP_API_KEY}`,
      { withCredentials: true }
    );
    // console.log(response.data);
    const { lat, lon } = response.data[0];
    res.json({ lat, lon, data: response.data[0] });
  } catch (error) {
    console.log(error);
    res.json({ success: false, status: 400, message: error.message });
  }
});

module.exports = listingRouter;
