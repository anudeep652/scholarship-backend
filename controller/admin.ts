import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(username, password);

  if (!username || !password)
    return res.status(400).json({ error: "Invalid credentials" });

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.status(200).json({ message: "Successfully login" });
  }

  return res.status(400).json({ error: "Invalid user" });
};
