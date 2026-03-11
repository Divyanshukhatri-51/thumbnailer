import express from "express"
import { deleteThumbnail, generateThumbnail } from "../controllers/thumbnailController.js";
import { protect } from "../middleware/auth.js";

const thumbnailRouter = express.Router();

thumbnailRouter.post('/generate', protect, generateThumbnail)
thumbnailRouter.delete('/delete/:id', protect, deleteThumbnail)

export default thumbnailRouter;