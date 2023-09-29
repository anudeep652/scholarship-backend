import { Router } from "express";
import {
  editProfile,
  farmerLogin,
  getFarmerDetails,
  newFarmer,
} from "../controller/farmer";

const router = Router();

router.post("/new", newFarmer);
router.post("/login", farmerLogin);
router.patch("/edit", editProfile);
router.get("/get/:id", getFarmerDetails);

export default router;
