const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth.js");

profileRouter.get("/view", userAuth, (req, res) => {
  try {
    // const user = req.user;
    res.json("this is the user profile route!");
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});


profileRouter.patch("/edit", userAuth, (req, res) => {
  try {
    // const user = req.user;
    const ALLOWED_EDITS = ["address", "age", "firstName", "lastName" ];
    



    res.json("this is the user profile route!");
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});


profileRouter.get("/view", userAuth, (req, res) => {
  try {
    // const user = req.user;
    res.json("this is the user profile route!");
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
});



module.exports = profileRouter;
