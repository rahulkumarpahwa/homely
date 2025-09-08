const { Token } = require("../models/token.js");
const { User } = require("../models/user.js");
const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Token Not Valid!");
    }
    const checkTokenBlacklist = await Token.findOne({ token: token });
    if (checkTokenBlacklist) {
      throw new Error("Token Not Valid! Try to Login!");
    }
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    const { _id } = decodedToken;
    const user = await User.findById({ _id: _id });
    if (!user) {
      throw new Error("User does not Exist!");
    }
    req.user = user;
    next();
  } catch (error) {
    res
      .status(400)
      .json({ success: false, status: 400, message: error.message });
  }
};

module.exports = { userAuth };
