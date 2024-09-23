import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
