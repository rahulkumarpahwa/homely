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

const validateNewListing = (req) => {
  const { title, description, imageUrl, street, location, owner, rating } =
    req.body;
  if (!title || !description) {
    throw new Error("Title and Description must exist!");
  } else if (!street) {
    throw new Error("Address/Street must Exist!");
  } else if (rating > 5 && rating < 1) {
    throw new Error("Enter a valid rating (1-5)");
  } else if (owner.toString() !== req.user._id.toString()) {
    throw new Error("Invalid User Entering Data!");
  }

  const isImageSafe = imageUrl.every((value) => validator.isURL(value));
  if (!isImageSafe) {
    throw new Error("Enter a valid Image Url!");
  }

  const { city, state, postalcode, country } = location;
  if (!city) {
    throw new Error("City must Exist");
  } else if (!state) {
    throw new Error("State must Exist!");
  } else if (!postalcode) {
    throw new Error("PostalCode must Exist!");
  } else if (!country) {
    throw new Error("Country must Exist!");
  }
};

const validateEditListing = (req) => {
  const { title, description, imageUrl, street, location } = req.body;
  if (!title || !description) {
    throw new Error("Title and Description must exist!");
  } else if (!street) {
    throw new Error("Address/Street must Exist!");
  }

  const isImageSafe = imageUrl.every((value) => validator.isURL(value));
  if (!isImageSafe) {
    throw new Error("Enter a valid Image Url!");
  }

  const { city, state, postalcode, country } = location;
  if (!city) {
    throw new Error("City must Exist");
  } else if (!state) {
    throw new Error("State must Exist!");
  } else if (!postalcode) {
    throw new Error("PostalCode must Exist!");
  } else if (!country) {
    throw new Error("Country must Exist!");
  }
};

module.exports = {
  validateSignUpData,
  editValidation,
  validateNewListing,
  validateEditListing,
};
