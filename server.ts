import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import farmerRouter from "./routes/farmer";
import doctorRouter from "./routes/doctor";
import { getFarmerCases } from "./controller/farmer";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/farmer", farmerRouter);
app.use("/doctor", doctorRouter);

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
