import { Router } from "express";
import {
  bookDoctor,
  // bookDoctor,
  bookDoctorVaccine,
  doctorLogin,
  editDoctorProfile,
  findDoctorByLocation,
  getAllDoctors,
  getCases,
  getDoctorDetails,
  newDoctor,
} from "../controller/doctor";
import { getCaseFarmers } from "../controller/farmer";

const router = Router();

router.post("/new", newDoctor);
router.get("/all", getAllDoctors);
router.post("/login", doctorLogin);
router.patch("/edit", editDoctorProfile);
router.get("/get/:id", getDoctorDetails);
router.get("/find/:city", findDoctorByLocation);
router.post("/book/vaccine", bookDoctorVaccine);
router.post("/case-farmers", getCaseFarmers);
router.post("/book", bookDoctor);
router.get("/get-cases/:doctor_id", getCases);

export default router;
