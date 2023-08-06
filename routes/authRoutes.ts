import router from "express";
import { loginUser, registerUser } from "../controller/user";

const authRouter = router.Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", registerUser);

export default authRouter;
