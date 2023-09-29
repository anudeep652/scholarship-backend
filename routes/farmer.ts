import { Router } from "express";
import {
  editProfile,
  farmerLogin,
  getFarmerDetails,
  newFarmer,
} from "../controller/farmer";
import { farmerUpload } from "../controller/upload";

const router = Router();

router.post("/new", newFarmer);
router.post("/new/case", farmerUpload);
router.post("/login", farmerLogin);
router.patch("/edit", editProfile);
router.get("/get/:id", getFarmerDetails);

export default router;
