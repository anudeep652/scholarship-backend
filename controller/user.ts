import { Request, Response } from "express";
import User from "../models/UserSchema";
import bcrypt from "bcryptjs";
import { generateJwt, validateEmail } from "../helpers";

// * @desc    Login  user
// * @route   POST /user/login
// * @access  Public
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  //checking if any field is empty
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields " });
  }

  //checking if the user  exists
  const userExists: any = await User.findOne({ email: email });

  if (userExists) {
    if (await bcrypt.compare(password, userExists.password)) {
      return res.status(200).json({
        username: userExists.username,
        email: userExists.email,
        token: generateJwt(userExists._id),
      });
    }
    return res.status(400).json({ message: "Invalid password" });
  }
  return res.status(400).json({ message: "No user with this email found" });
};

// * @desc    Register new user
// * @route   POST /user/register
// * @access  Public
export const registerUser = async (req: Request, res: Response) => {
  const { username, email, password, confirmPassword } = req.body;

  //checking if any field is empty
  if (!email || !username || !password || !confirmPassword) {
    return res.status(400).json({ error: "Please fill all the fields " });
  }

  //checking if the user already exists
  const userExists: any = await User.findOne({ username: username });
  if (userExists) {
    return res.status(400).json({ message: "This username already exists" });
  }

  const userEmailExists = await User.findOne({ email: email });
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
        const user = await User.create({
          username,
          email,
          password: hashedPassword,
        });

        if (user) {
          return res.status(201).json({
            username,
            email,
            token: generateJwt(user._id),
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
