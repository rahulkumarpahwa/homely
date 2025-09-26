const express = require("express");
const { userAuth } = require("../middlewares/auth");
const {
  validateNewListing,
  validateEditListing,
} = require("../utils/validation");
const { Listing } = require("../models/listing");
const listingRouter = express.Router();

listingRouter.post("/create", userAuth, async (req, res) => {
  try {
    validateNewListing(req);
    // future : add the validation that the current listing exist previously or not!
    const newListing = new Listing({ ...req.body });
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

module.exports = listingRouter;
