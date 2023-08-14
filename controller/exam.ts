import { Request, Response } from "express";
import Exam from "../models/ExamSchema";

export const AddNewExam = async (req: Request, res: Response) => {
  const {
    name,
    class: className,
    mark,
    income,
    community,
    link,
    lastDate,
    benefits,
    eligibility,
    isGovt,
  } = req.body;
  try {
    const exam = await Exam.create({
      name,
      class: className,
      mark,
      income,
      community,
      link,
      lastDate,
      benefits,
      eligibility,
      isGovt,
    });
    res.status(201).json({ message: "New exam added", data: exam });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error adding new exam", error: error });
  }
};

export const filterExams = async (req: Request, res: Response) => {
  const { class: className, mark, income, community, isGovt } = req.body;
  try {
    let exams = await Exam.find({});

    // class filter
    exams = exams.filter((e) => {
      if (e.class) {
        return e.class.includes(className);
      }
      return true;
    });

    // mark filter
    exams = exams.filter((e) => {
      if (e.mark) {
        return mark >= e.mark;
      } else {
        let cm = e.community.find((c) => c.cm === community);
        if (cm?.mark) {
          return mark >= cm?.mark;
        }
      }
    });

    // income filter
    exams = exams.filter((e) => {
      if (e.income) {
        return income <= e.income;
      }
      return true;
    });

    exams = exams.filter((e) => {
      if (e.isGovt) {
        return isGovt === e.isGovt;
      }
      return true;
    });

    res.status(200).json({ data: exams });
  } catch (error) {
    res.status(400).json({ message: "Error fetching exams", error: error });
  }
};
