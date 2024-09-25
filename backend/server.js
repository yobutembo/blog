import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import BlogPost from "./models/blogPostModel.js";
import User from "./models/userModel.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get("/api/allblogs", async (req, res) => {
  try {
    const blogs = await BlogPost.find({});
    res.json(blogs);
  } catch (error) {
    console.error(error);
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
