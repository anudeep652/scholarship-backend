import emailValidator from "email-validator";
import jwt from "jsonwebtoken";

//generate jwt token
export const generateJwt = (id: any) => {
  return jwt.sign({ id }, "mysecret", {
    expiresIn: "30d",
  });
};

//validating email function
export const validateEmail = (email: string) => {
  return emailValidator.validate(email);
};
