import express from "express";
import { getBlogs, getBlogById } from "../controllers/blogPostControllers.js";

const router = express.Router();

router.route("/").get(getBlogs);

router.route("/:id").get(getBlogById);

export default router;
