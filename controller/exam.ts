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

    console.log("0:", exams);
    // class filter
    exams = exams.filter((e) => {
      if (e.class) {
        return e.class.includes(className);
      }
      return true;
    });

    console.log("1:", exams);

    // mark filter
    exams = exams.filter((e) => {
      if (e.mark === 0 && e.community.length === 0) return true;
      if (e.mark && e.mark !== 0) {
        // if(e.mark === 0)
        return mark >= e.mark;
      } else {
        let cm = e.community.find((c) => c.cm === community);
        if (cm?.mark) {
          return mark >= cm?.mark;
        }
      }
    });
    console.log("2:", exams);

    // income filter
    exams = exams.filter((e) => {
      if (e.income) {
        return income <= e.income;
      }
      return true;
    });

    console.log("3:", exams);

    if (!isGovt) {
      exams = exams.filter((e) => {
        if (e.isGovt) {
          return isGovt === e.isGovt;
        }
        return true;
      });
    }
    console.log("4:", exams);

    res.status(200).json({ data: exams });
  } catch (error) {
    res.status(400).json({ message: "Error fetching exams", error: error });
  }
};
