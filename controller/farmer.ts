import { Request, Response } from "express";
import Farmer from "../models/FarmerSchema";
import bcrypt from "bcryptjs";
import { validateEmail } from "../helpers/authHelpers";

export const getFarmerCases = async (req: Request, res: Response) => {
  try {
    const cases = await Farmer.find({}, { cases: 1 });
    res.status(200).json({ message: "All cases", data: cases });
  } catch (error) {
    res.status(400).json({ message: "Error fetching cases", error: error });
  }
};

export const newFarmer = async (req: Request, res: Response) => {
  const { name, email, password, confirmPassword } = req.body;
  // try {
  //   const newFarmer = await Farmer.create({ ...req.body });
  //   res.status(201).json({ message: "New case added", data: newFarmer });
  // } catch (error) {
  //   res.status(400).json({ message: "Error adding new case", error: error });
  // }

  if (!email || !name || !password || !confirmPassword) {
    return res.status(400).json({ message: "Please fill all the fields " });
  }

  //checking if the user already exists
  const userExists: any = await Farmer.findOne({ name });
  if (userExists) {
    return res.status(400).json({ message: "This username already exists" });
  }

  const userEmailExists = await Farmer.findOne({ email: email });
  if (userEmailExists) {
    return res.status(400).json({ message: "This email already exists" });
  }

  //validating email
  if (validateEmail(email)) {
    //checking if password and confirm password are same
    if (password === confirmPassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      try {
        const user = await Farmer.create({
          ...req.body,
          ["password"]: hashedPassword,
        });

        if (user) {
          return res.status(201).json({
            name: user.name,
            email: user.email,
            _id: user._id,
            address: user.address,
            city: user.city,
            pincode: user.pincode,
            phone: user.phone,
            role: "farmer",
          });
        }
      } catch (error) {
        return res.status(400).json({ message: "It is an error" });
      }
    }

    return res.status(400).json({ message: "Passwords doesn't match" });
  }

  return res.status(400).json({ message: "Invalid email" });
};

export const farmerLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  //checking if any field is empty
  if (!email || !password) {
    return res.status(400).json({ error: "Please fill all the fields " });
  }

  //checking if the user  exists
  const userExists: any = await Farmer.findOne({ email: email });

  if (userExists) {
    if (await bcrypt.compare(password, userExists.password)) {
      return res.status(200).json({
        name: userExists.name,
        email: userExists.email,
        _id: userExists._id,
        address: userExists.address,
        city: userExists.city,
        pincode: userExists.pincode,
        phone: userExists.phone,
        photo: userExists.photo,
        role: "farmer",
      });
    }
    return res.status(400).json({ message: "Invalid password" });
  }
  return res.status(400).json({ message: "No user with this email found" });
};

export const editProfile = async (req: Request, res: Response) => {
  const { img, _id } = req.body;
  try {
    const farmer = await Farmer.updateOne({ _id }, { photo: img });
    res.status(200).json({ message: "Profile updated", data: farmer });
  } catch (error) {
    return res.status(400).json({ message: "Some error occured", error });
  }
};

export const getFarmerDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const farmer = await Farmer.findOne({ _id: id });
    return res
      .status(200)
      .json({ message: "Farmer details", data: farmer, role: "farmer" });
  } catch (error) {
    return res.status(400).json({ message: "Some error occured", error });
  }
};
