import express from "express";
import asyncHandler from "../middleWare/asyncHandler.js";
import BlogPost from "../models/blogPostModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const blogs = await BlogPost.find({});
    res.json(blogs);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const blog = BlogPost.findById(req.params.id);
    res.json(blog);
  })
);

export default router;
