import { Request, Response } from "express";
import { Grade, TDiploma, TaTenth, Tpg, TuTenth, Tug } from "../types";

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

const handleUTenth = (req: Request, res: Response, data: TuTenth) => {};

const handleAtenth = (req: Request, res: Response, data: TaTenth) => {};

const handleUg = (req: Request, res: Response, data: Tug) => {};

const handlePg = (req: Request, res: Response, data: Tpg) => {};

const handleDiploma = (req: Request, res: Response, data: TDiploma) => {};
