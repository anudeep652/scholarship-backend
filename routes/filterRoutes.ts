import express from "express";
import { filter } from "../controller/filtercontroller";

const router = express.Router();

router.post("/filter", filter);

export default router;
