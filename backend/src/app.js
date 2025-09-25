const express = require("express");
const app = express();
require("dotenv").config();
const { connectDB } = require("./config/database.js");
const authRouter = require("./routes/auth.js");
const profileRouter = require("./routes/profile.js");

const cookieParser = require("cookie-parser");
const listingRouter = require("./routes/listing.js");
const cors = require("cors");

// middlewares:
app.use(express.json());
app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));

// adding the cors
const corsOptions = {
  origin: ["http://localhost:5173", "https://thehomely.netlify.app"],
  methods: ["GET", "PATCH", "POST", "DELETE"],
  credentials: true, // allow cookies and credentials
};
app.use(cors(corsOptions));

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
app.use("/list", listingRouter);
