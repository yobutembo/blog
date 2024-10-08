import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import blogPostRoutes from "./routes/blogPostRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleWare/errorMiddleware.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 4000;

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("App is running");
});

app.use("/api/blogs", blogPostRoutes);
app.use("/api/users", userRoutes);

//Error Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
