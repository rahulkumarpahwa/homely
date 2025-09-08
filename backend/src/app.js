const express = require("express");
const app = express();
require("dotenv").config();
const { connectDB } = require("./config/database.js");
const authRouter = require("./routes/auth.js");
const profileRouter = require("./routes/profile.js");

const cookieParser = require('cookie-parser');


// middlewares: 
app.use(express.json());
app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));

connectDB()
  .then(() => {
    console.log("Database has been connected successfully!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });


app.use("/", authRouter);
app.use("/profile", profileRouter);