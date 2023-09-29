import { Router } from "express";
import {
  bookDoctor,
  doctorLogin,
  editDoctorProfile,
  findDoctorByLocation,
  getAllDoctors,
  getDoctorDetails,
  newDoctor,
} from "../controller/doctor";
import { getFarmerCases } from "../controller/farmer";

const router = Router();

router.post("/new", newDoctor);
router.get("/all", getAllDoctors);
router.post("/login", doctorLogin);
router.patch("/edit", editDoctorProfile);
router.get("/get/:id", getDoctorDetails);
router.get("/find/:city", findDoctorByLocation);
router.post("/book", bookDoctor);

export default router;
