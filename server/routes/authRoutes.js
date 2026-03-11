import express from "express"
import { loginUser, logoutUser, registerUser, verifyUser } from "../controllers/authController.js";
import { protect } from "../middleware/auth.js";

const authRouter = express.Router();

authRouter.post('/register', registerUser);
authRouter.post('/logout', logoutUser);
authRouter.post('/login', loginUser);
authRouter.get('/verify', protect, verifyUser);
authRouter.post('/verify', protect, logoutUser);

export default authRouter