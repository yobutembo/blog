import express from "express";
import {
  authUser,
  getUsers,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleWare/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/register", registerUser);

router.get("/", protect, admin, getUsers);

export default router;
