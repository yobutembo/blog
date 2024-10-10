import express from "express";
import {
  authUser,
  getUserProfile,
  getUsers,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect, admin } from "../middleWare/authMiddleware.js";

const router = express.Router();

router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/register", registerUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.get("/", protect, admin, getUsers);

export default router;
