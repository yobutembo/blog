import User from "../models/userModel.js";
import asyncHandler from "../middleWare/asyncHandler.js";
import jwt from "jsonwebtoken";

//Here we write all the functions for our user routes

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    //Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    //Set JWT as HTTP-Only  Cookie

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json({
      _id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid user eamil or password.");
  }
});

//Admin-only routes
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

export { authUser, getUsers };
