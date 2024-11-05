import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // for parsing application/json

app.use(cookieParser()); // allow us to parse incoming cookies

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});
