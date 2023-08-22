import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import DataRouter from "./routes/addToDbRoutes";
import { login } from "./controller/admin";
import cors from "cors";
import filterRoutes from "./routes/filterRoutes";
import authRoutes from "./routes/authRoutes";
import examRoutes from "./routes/examRoutes";
import { getAllLive } from "./helpers/filterlive";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/scholarship", DataRouter);
app.use("/findscholarship", filterRoutes);
app.use("/exam", examRoutes);
app.use("/user", authRoutes);
app.post("/login", login);
app.get("/getalllive", getAllLive);

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Succesfully connencted to Db");
    app.listen(process.env.PORT || 3000, () => {
      console.log("App is listening on port 3000");
    });
  } catch (error) {
    console.log("Error connecting to db", error);
  }
};
connection();
