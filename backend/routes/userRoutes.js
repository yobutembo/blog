import express from "express";
import { authUser, getUsers } from "../controllers/userController.js";
import { protect, admin } from "../middleWare/authMiddleware.js";

const router = express.Router();

router.post("/login", authUser);

router.get("/", protect, admin, getUsers);

export default router;
