const express = require("express");
const profileRouter = express.Router();
const bycrpt = require("bcrypt");
const validator = require("validator");
const { userAuth } = require("../middlewares/auth.js");
const { editValidation } = require("../utils/validation.js");

profileRouter.get("/view", userAuth, (req, res) => {
  try {
    const user = req.user;
    res.json({ success: true, status: 200, data: user });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});

profileRouter.patch("/edit", userAuth, async (req, res) => {
  try {
    const user = req.user;
    editValidation(req);
    const { firstName, lastName, address, age } = req.body;
    user.firstName = firstName;
    user.lastName = lastName;
    user.address = address;
    user.age = age;
    await user.save();

    res.json({
      success: true,
      status: 200,
      message: `${firstName}, Your Profile has been updated!`,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});

profileRouter.patch("/password", userAuth, async (req, res) => {
  try {
    const user = req.user;
    const ALLOWED_EDITS = ["password", "confirmedPassword"];
    const isAllowed = Object.keys(req.body).every((key) =>
      ALLOWED_EDITS.includes(key)
    );
    if (!isAllowed) {
      throw new Error("Password can't be updated!");
    }
    const { password, confirmedPassword } = req.body;
    if (password !== confirmedPassword) {
      throw new Error("Confirmed Password must be same !");
    }
    if (!validator.isStrongPassword(password)) {
      throw new Error("Password Must be Strong!");
    }
    const newHashedPassword = await bycrpt.hash(password, 10);
    user.password = newHashedPassword;
    await user.save();
    res.json({
      success: true,
      status: 200,
      message: `${user.firstName}, Your password has been updated!`,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});

module.exports = profileRouter;
