const express = require("express");
require("dotenv").config();

const connectDB = require("./config/connectDB");
const recipeRouter = require("./routes/recipeRouter");
const userRouter = require("./routes/userRouter");

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/recipe", recipeRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
