const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, email, password, mobile } = req.body;
  if (!firstName || !lastName) {
    // when name is empty string.
    throw new Error("First Name or Last Name must exist!");
  } else if (!validator.isEmail(email)) {
    throw new Error("Email must be valid!");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Password must be Strong!");
  } else if (mobile.length != 10) {
    throw new Error("Mobile number must be of 10 digits!");
  }
};

module.exports = { validateSignUpData };
