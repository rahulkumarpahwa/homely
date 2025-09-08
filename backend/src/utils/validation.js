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

const editValidation = (req) => {
  const ALLOWED_EDITS = ["address", "age", "firstName", "lastName"];
  const isAllowed = Object.keys(req.body).every((key) =>
    ALLOWED_EDITS.includes(key)
  );
  if (!isAllowed) {
    throw new Error("Invalid Update!");
  }
  const { firstName, lastName, address, age } = req.body;
  if (!firstName || !lastName) {
    throw new Error("First Name or Last Name must exist!");
  } else if (age < 18 || age > 150) {
    throw new Error("Enter the valid age!");
  } else if (!address) {
    throw new Error("Address can't be empty!");
  }
};

module.exports = { validateSignUpData, editValidation };
