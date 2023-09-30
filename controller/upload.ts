import { Request, Response } from "express";
import axios from "axios";
import Farmer from "../models/FarmerSchema";
import { base64ToImage } from "../helpers/image";
import { get } from "http";
import fs from "fs";

async function getPhoto(id: string, length: number) {
  let arr = []
  for (let i = 1; i <= length; i++) {
    const data = fs.readFileSync(`images/${id}/${i}.png`, {
      encoding: "base64",
    });
    const result = await classifyImage(data);
    console.log('kkkkkkkkkkkkkk');
    
    arr.push(result)
  }
  return arr
}

async function classifyImage(image: any) {
  return axios({
    method: "POST",
    url: "https://classify.roboflow.com/cattle-diseases/1",
    params: {
      api_key: "NOn0ptB8FpdN0T5Hihgq",
    },
    data: image,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(function (response: any) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error: any) {
      console.log(error);
      return error;
    });
}

export const newCase = async (req: Request, res: Response) => {
  const { _id, images } = req.body;
  // base64ToImage(images);
  images.forEach((image: string, index: number) =>
    base64ToImage(image, _id, index + 1)
  );
  console.log(_id);

  images.forEach((index: any) => {
    console.log(`images/${_id}/${index + 1}.png`);
  });

  const result = await getPhoto(_id, images.length);

  console.log("done" , result);

  try {
    const farmer = await Farmer.findOneAndUpdate(
      {
        _id,
      },
      {
        $push: { cases: { $each: [{ images }] } },
      }
    );

    console.log(farmer, "farmer");
    console.log("no err");
    return res.status(200).json({ message: "Case added", data: farmer });
  } catch (error) {
    console.log("err");

    return res.status(400).json({ message: "Some error occured", error });
  }
};
