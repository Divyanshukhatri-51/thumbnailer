import express from 'express';
import "dotenv/config";

import cors from "cors";
import connectDB from "./configs/db.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import authRouter from "./routes/authRoutes.js";
import thumbnailRouter from "./routes/ThumbnailRoutes.js";
import userRouter from "./routes/userRoutes.js";

await connectDB();
const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true
}))
app.use(express.json());
app.set("trust proxy", 1)
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        path: "/"
    }, // 7 days
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI,
        collectionName: 'session'
    })
}))

app.get('/', (req, res) => {
    res.send('Server is Live!');
}); 

app.use('/api/auth', authRouter);
app.use('/api/thumbnail', thumbnailRouter);
app.use("/api/user", userRouter);
const port = process.env.PORT || 3000;

if(process.env.NODE_ENV !== "production"){
server.listen(PORT, () => {
    console.log("server is running on port: ", PORT);
})
}
//export server for vercel
export default server;
