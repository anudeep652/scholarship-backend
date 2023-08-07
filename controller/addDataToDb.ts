import { Request, Response, response } from "express";
import mongoose from "mongoose";
import UTenth from "../models/UtenthSchema";
import Atenth from "../models/AboveTenthSchema";
import UG from "../models/UGSchema";
import PG from "../models/PGSchema";
import Diploma from "../models/DiplomaSchema";

enum Tcategory {
  UTENTH = "UTENTH",
  ATENTH = "ATENTH",
  UG = "UG",
  PG = "PG",
  DIPLOMA = "DIPLOMA",
}

// * @desc    add new Scholarship to db
// * @route   POST /scholarship/new
// * @access  Private
export const addDataToDb = async (req: Request, res: Response) => {
  const { category, scholarshipData } = req.body;
  if (!category || !scholarshipData)
    return res
      .status(400)
      .json({ error: "No category specified or no scholarship data given" });
  switch (category) {
    case Tcategory.UTENTH:
      await addDataToUTenth(req, res, scholarshipData);
      break;
    case Tcategory.ATENTH:
      await AddDataToAboveTenth(req, res, scholarshipData);
      break;
    case Tcategory.UG:
      await AddDataToUG(req, res, scholarshipData);
      break;
    case Tcategory.PG:
      await AddDataToPG(req, res, scholarshipData);
      break;
    case Tcategory.DIPLOMA:
      await AddDataToDiploma(req, res, scholarshipData);
    default:
      res.status(400).json({ error: "Invalid category" });
  }
};

const addDataToUTenth = async (
  req: Request,
  res: Response,
  scholarshipData: any
) => {
  try {
    let data = await UTenth.create(scholarshipData);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: `An error occured ${error}` });
  }
};

const AddDataToAboveTenth = async (
  req: Request,
  res: Response,
  scholarshipData: any
) => {
  try {
    let data = await Atenth.create(scholarshipData);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: "An error occured" });
  }
};

const AddDataToUG = async (
  req: Request,
  res: Response,
  scholarshipData: any
) => {
  try {
    let data = await UG.create(scholarshipData);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: "An error occured" });
  }
};

const AddDataToPG = async (
  req: Request,
  res: Response,
  scholarshipData: any
) => {
  try {
    let data = await PG.create(scholarshipData);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: "An error occured" });
  }
};

const AddDataToDiploma = async (
  req: Request,
  res: Response,
  scholarshipData: any
) => {
  try {
    let data = await Diploma.create(scholarshipData);
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error: "An error occured" });
  }
};
