import { Request, Response } from "express";
import axios from "axios";
import fs from "fs";
const path = require('path');
import { buffer } from "stream/consumers";

// const API_KEY = "rf_TuSYLo2RC2NJuerOvKXKHOGqyKf2";



function classifyImage(image: any) {
  return axios({
    method: "POST",
    url: "https://classify.roboflow.com/cow-diseae-identifier/1",
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
      return error.message;
    });
}

export const farmerUpload = async (req: Request, res: Response) => {
  const { images } = req.body;
  // const img1 = JSON.parse(images);

  // Decode base64 data into binary
const binaryData = Buffer.from(images, 'base64');

// Specify the output file path
const outputPath = path.join('images', 'output.jpg'); // You can change the filename and extension as needed

// Write the binary data to a file
fs.writeFileSync(outputPath, binaryData);

  const diseases = await classifyImage(images);

  console.log("Diseases:", diseases);

  return res.status(200).json({ message: "Image uploaded", data: diseases });
};
