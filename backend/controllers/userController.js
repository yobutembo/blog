import User from "../models/userModel.js";
import asyncHandler from "../middleWare/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

//Here we write all the functions for our user routes

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
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

// @desc  Get Users
// @route   GET /api/users
// @access  Private - Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

export { authUser, getUsers };
