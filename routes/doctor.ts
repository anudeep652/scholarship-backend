import { Router } from "express";
import {
  doctorLogin,
  editDoctorProfile,
  getAllDoctors,
  getDoctorDetails,
  newDoctor,
} from "../controller/doctor";

const router = Router();

router.post("/new", newDoctor);
router.get("/all", getAllDoctors);
router.post("/login", doctorLogin);
router.patch("/edit", editDoctorProfile);
router.get("/get/:id", getDoctorDetails);

export default router;
