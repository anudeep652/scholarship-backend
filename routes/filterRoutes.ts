import express from "express";
import { filter } from "../controller/filter";

const router = express.Router();

router.post("/filter", filter);

export default router;
