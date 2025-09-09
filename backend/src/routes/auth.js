const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateSignUpData } = require("../utils/validation.js");
const { User } = require("../models/user.js");
const { userAuth } = require("../middlewares/auth.js");
const { Token } = require("../models/token.js");
const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    validateSignUpData(req);
    const { firstName, lastName, email, password, age, mobile, address } =
      req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      age,
      email,
      password: passwordHash,
      mobile,
      address,
    });

    await newUser.save();
    res.json({
      success: true,
      status: 200,
      message: `${firstName} has Signup Successfully!`,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid Credentials!");
    }
    const passwordHash = user.password;
    const checkPassword = await bcrypt.compare(password, passwordHash);

    if (!checkPassword) {
      throw new Error("Invalid Credentials!");
    }

    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    res.cookie("token", token, { expires: new Date(Date.now() + 3600000) });
    res.json({
      success: true,
      status: 200,
      message: `${user.firstName} has Login Successfully!`,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});

authRouter.post("/logout", userAuth, async (req, res) => {
  // BlackListing the token:
  const { token } = req.cookies;
  const newTokenBlacklist = new Token({ token: token });
  await newTokenBlacklist.save();

  res.cookie("token", "", { expires: new Date(Date.now()) });
  res.json({
    success: true,
    status: 200,
    message: "User LoggedOut Successfully!",
  });
});

authRouter.delete("/delete", userAuth, async (req, res) => {
  // BlackListing the token:

  const user = req.user;
  const deletedUser = await User.findByIdAndDelete({ _id: user._id });

  const { token } = req.cookies;
  const newTokenBlacklist = new Token({ token: token });
  await newTokenBlacklist.save();

  res.cookie("token", "", { expires: new Date(Date.now()) });
  res.json({
    success: true,
    status: 200,
    message: `${deletedUser.firstName}, Your Account Deleted Successfully!`,
  });
});

module.exports = authRouter;
