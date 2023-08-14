import express from "express";
import { AddNewExam, filterExams } from "../controller/exam";

const examRouter = express.Router();

examRouter.post("/new", AddNewExam);
examRouter.post("/filter", filterExams);

export default examRouter;
