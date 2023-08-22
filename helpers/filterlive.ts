import Utenth from "../models/UtenthSchema";
import Atenth from "../models/AboveTenthSchema";
import Ug from "../models/UGSchema";
import Pg from "../models/PGSchema";
import Diploma from "../models/DiplomaSchema";
import { Request, Response } from "express";

export const getAllLive = async (req: Request, res: Response) => {
  try {
    // let utenth: any = await Utenth.find({});
    // let atenth: any = await Atenth.find({});
    let ug: any = await Ug.find({});
    // let pg: any = await Pg.find({});
    // let diploma: any = await Diploma.find({});

    // utenth = utenth
    //   .filter((sch: any) => filterLive(sch))
    //   .map((sch: any) => {
    //     return { name: sch.name, link: sch.link };
    //   });
    // atenth = atenth
    //   .filter((sch: any) => filterLive(sch))
    //   .map((sch: any) => {
    //     return { name: sch.name, link: sch.link };
    //   });
    ug = ug
      .filter((sch: any) => filterLive(sch))
      .map((sch: any) => {
        return { name: sch.name, link: sch.link };
      });

    // pg = pg
    //   .filter((sch: any) => filterLive(sch))
    //   .map((sch: any) => {
    //     return { name: sch.name, link: sch.link };
    //   });
    // diploma = diploma
    //   .filter((sch: any) => filterLive(sch))
    //   .map((sch: any) => {
    //     return { name: sch.name, link: sch.link };
    //   });

    res.status(200).json({ data: [...ug] });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const filterLive = (schs: any) => {
  let today: any = new Date().toLocaleDateString();
  let lastDate = schs.lastDate.split("-").map((d: any) => parseInt(d));
  today = today.split("/").map((d: any) => parseInt(d));
  if (lastDate[2] < today[2]) return false;
  if (lastDate[1] < today[1]) return false;
  if (lastDate[0] < today[0]) return false;
  return true;
};
