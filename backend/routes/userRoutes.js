import express from "express";
import { authUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", authUser);
router.get("/", getUsers);

export default router;
