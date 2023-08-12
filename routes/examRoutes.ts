import express from "express";
import { AddNewExam } from "../controller/exam";

const examRouter = express.Router();

examRouter.post("/new", AddNewExam);

export default examRouter;
