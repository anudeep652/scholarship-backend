import { Request, Response } from "express";
import Exam from "../models/ExamSchema";

export const AddNewExam = async (req: Request, res: Response) => {
  const { name, class: className, mark, income, community } = req.body;
  try {
    const exam = await Exam.create({
      name,
      class: className,
      mark,
      income,
      community,
    });
    res.status(201).json({ message: "New exam added", data: exam });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error adding new exam", error: error });
  }
};
