import BlogPost from "../models/blogPostModel.js";
import asyncHandler from "../middleWare/asyncHandler.js";

//desc: Fetch all blogs
//route: GET /api/blogs
//access: Public
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await BlogPost.find({});
  if (blogs.length === 0) {
    res.status(404);
    throw new Error("Blogs not found");
  } else {
    res.json(blogs);
  }
});

//desc: Fetch single blog
//route: GET /api/blogs/:id
//access: Public
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await BlogPost.findById(req.params.id);
  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  } else {
    res.json(blog);
  }
});

export { getBlogs, getBlogById };
