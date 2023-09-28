import { Request, Response } from "express";
import Doctor from "../models/DoctorSchema";

export const newDoctor = async (req: Request, res: Response) => {
  try {
    const newFarmer = await Doctor.create({ ...req.body });
    res.status(201).json({ message: "New case added", data: newFarmer });
  } catch (error) {
    res.status(400).json({ message: "Error adding new case", error: error });
  }
};
