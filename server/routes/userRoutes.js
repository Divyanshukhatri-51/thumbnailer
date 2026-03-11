import express from "express";
import { getSingleThumbail, getUsersThumbails } from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.get("/thumbnails", protect, getUsersThumbails);
userRouter.get("/thumbnail/:id", protect, getSingleThumbail);

export default userRouter;