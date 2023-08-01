import express from "express";
import { addDataToDb } from "../controller/addDataToDb";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Success" });
});
router.post("/new", addDataToDb);

export default router;
