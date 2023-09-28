import { Router } from "express";
import { farmerLogin, newFarmer } from "../controller/farmer";

const router = Router();

router.post("/new", newFarmer);
router.post("/login", farmerLogin);

export default router;
