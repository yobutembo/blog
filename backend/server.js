import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import BlogPost from "./models/blogPostModel.js";
import User from "./models/userModel.js";
import asyncHandler from "./middleWare/asyncHandler.js";
import { notFound, errorHandler } from "./middleWare/errorMiddleware.js";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get(
  "/api/blogs",
  asyncHandler(async (req, res) => {
    const blogs = await BlogPost.find({});
    res.json(blogs);
  })
);

app.get(
  "/api/blogs/:id",
  asyncHandler(async (req, res) => {
    const blog = await BlogPost.findById(req.params.id);
    res.json(blog);
  })
);

//Error Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
