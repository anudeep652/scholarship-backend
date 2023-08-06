import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import DataRouter from "./routes/addToDbRoutes";
import { login } from "./controller/admin";
import cors from "cors";
import filterRoutes from "./routes/filterRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use("/scholarship", DataRouter);
app.use("/findscholarship", filterRoutes);
app.use("/user", authRoutes);
app.post("/login", login);

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Succesfully connencted to Db");
  } catch (error) {
    console.log("Error connecting to db", error);
  }
};
connection();

app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
