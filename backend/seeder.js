import colors from "colors";
import blogPosts from "./data/blogPosts.js";
import users from "./data/users.js";
import BlogPost from "./models/blogPostModel.js";
import User from "./models/userModel.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await BlogPost.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const samplePosts = blogPosts.map((post) => {
      return {
        ...post,
        user: adminUser,
      };
    });
    await BlogPost.insertMany(samplePosts);

    console.log("Data imported!".green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await BlogPost.deleteMany();
    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
