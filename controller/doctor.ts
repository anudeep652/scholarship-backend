import { Request, Response } from "express";
import Doctor from "../models/DoctorSchema";
import { validateEmail } from "../helpers/authHelpers";
import bcrypt from "bcryptjs";
export const newDoctor = async (req: Request, res: Response) => {
  const { name, email, password, confirmPassword } = req.body;

  if (!email || !name || !password || !confirmPassword) {
    return res.status(400).json({ message: "Please fill all the fields " });
  }

  //checking if the user already exists
  const userExists: any = await Doctor.findOne({ name });
  if (userExists) {
    return res.status(400).json({ message: "This username already exists" });
  }

  const userEmailExists = await Doctor.findOne({ email: email });
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
        const user = await Doctor.create({
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
            photo: user.photo,
            role: "doctor",
            appointments: user.appointments,
          });
        }
      } catch (error) {
        return res.status(400).json({ message: "It is an error", error });
      }
    }

    return res.status(400).json({ message: "Passwords doesn't match" });
  }
};

export const doctorLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  //checking if any field is empty
  if (!email || !password) {
    return res.status(400).json({ error: "Please fill all the fields " });
  }

  //checking if the user  exists
  const userExists: any = await Doctor.findOne({ email: email });

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
        appointments: userExists.appointments,

        role: "doctor",
      });
    }
    return res.status(400).json({ message: "Invalid password" });
  }
  return res.status(400).json({ message: "No user with this email found" });
};

export const editDoctorProfile = async (req: Request, res: Response) => {
  const { img, _id } = req.body;
  try {
    const farmer = await Doctor.updateOne({ _id }, { photo: img });
    res.status(200).json({ message: "Profile updated", data: farmer });
  } catch (error) {
    return res.status(400).json({ message: "Some error occured", error });
  }
};

export const getDoctorDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findOne({ _id: id });
    res
      .status(200)
      .json({ message: "Farmer details", data: doctor, role: "doctor" });
  } catch (error) {
    return res.status(400).json({ message: "Some error occured", error });
  }
};

export const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({ message: "All doctors", data: doctors });
  } catch (error) {
    return res.status(400).json({ message: "Some error occured", error });
  }
};

export const findDoctorByLocation = async (req: Request, res: Response) => {
  const { city } = req.params;
  try {
    const doctors = await Doctor.find({ city });
    return res.status(200).json({ message: "All doctors", data: doctors });
  } catch (error) {
    return res.status(400).json({ message: "Some error occured", error });
  }
};

export const bookDoctorVaccine = async (req: Request, res: Response) => {
  const { doctorId, farmerId } = req.body;
  console.log(farmerId);
  try {
    const doctor = await Doctor.findOneAndUpdate(
      {
        _id: doctorId,
      },
      {
        $push: { vaccineAppointments: farmerId },
      }
    );
    return res
      .status(200)
      .json({ message: "Booked successfully", data: doctor });
  } catch (error) {
    return res.status(400).json({ message: "Some error occured", error });
  }
};

export const bookDoctor = async (req: Request, res: Response) => {
  const { images, farmer_id, doctor_id } = req.body;
  try {
    const doctor = await Doctor.findOneAndUpdate(
      {
        _id: doctor_id,
      },
      {
        $push: { appointments: { farmer_id, images } },
      }
    );
    return res
      .status(200)
      .json({ message: "Booked successfully", data: doctor });
  } catch (error) {
    return res.status(400).json({ message: "Some error occured", error });
  }
};

export const getCases = async (req: Request, res: Response) => {
  const { doctor_id } = req.params;
  try {
    const cases = await Doctor.findOne({ _id: doctor_id }, { appointments: 1 });
    return res.status(200).json({ message: "All cases", data: cases });
  } catch (error) {
    return res.status(400).json({ message: "Some error occured", error });
  }
};
