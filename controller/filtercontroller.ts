import { Request, Response } from "express";
import { Grade, TDiploma, TaTenth, Tpg, TuTenth, Tug } from "../types";
import Utenth from "../models/UtenthSchema";
import Atenth from "../models/AboveTenthSchema";
import Ug from "../models/UGSchema";
import Pg from "../models/PGSchema";
import Diploma from "../models/DiplomaSchema";
import { myfilter } from "../helpers/filter";

export const filter = async (req: Request, res: Response) => {
  const grade = req.body.grade;
  const data = req.body.data;

  switch (grade) {
    case Grade.UTENTH:
      handleUTenth(req, res, data);
      break;

    case Grade.ATENTH:
      handleAtenth(req, res, data);
      break;

    case Grade.UG:
      handleUg(req, res, data);
      break;

    case Grade.PG:
      handlePg(req, res, data);
      break;

    case Grade.DIPLOMA:
      handleDiploma(req, res, data);
      break;
    default:
      res.status(400).json({ error: "Invalid grade" });
      break;
  }
};

const handleUTenth = async (req: Request, res: Response, data: TuTenth) => {
  const { isGirl } = data;
  try {
    let schs = await Utenth.find({ shouldBeGirl: isGirl });

    let filteredSchs = myfilter(Grade.UTENTH, schs, data);

    res.status(200).json({ data: filteredSchs });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const handleAtenth = async (req: Request, res: Response, data: TaTenth) => {
  const { isGirl } = data;
  try {
    let schs = await Atenth.find({ shouldBeGirl: isGirl });

    let filteredSchs = myfilter(Grade.ATENTH, schs, data);

    res.status(200).json({ data: filteredSchs });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const handleUg = async (req: Request, res: Response, data: Tug) => {
  const { isGirl } = data;
  try {
    let schs = await Ug.find({});

    let filteredSchs = myfilter(Grade.UG, schs, data);

    res.status(200).json({ data: filteredSchs });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const handlePg = async (req: Request, res: Response, data: Tpg) => {
  const { isGirl } = data;
  try {
    let schs = await Pg.find({});

    let filteredSchs = myfilter(Grade.PG, schs, data);

    res.status(200).json({ data: filteredSchs });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
const handleDiploma = async (req: Request, res: Response, data: TDiploma) => {
  const { isGirl } = data;
  try {
    let schs = await Diploma.find({ shouldBeGirl: isGirl });

    let filteredSchs = myfilter(Grade.DIPLOMA, schs, data);

    res.status(200).json({ data: filteredSchs });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
