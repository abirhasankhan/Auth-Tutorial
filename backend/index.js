import express from "express";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import dotenv from "dotenv";
import path from "path";

dotenv.config();


const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({origin: "*", credentials: true}));

app.use(express.json()); // for parsing application/json

app.use(cookieParser()); // allow us to parse incoming cookies

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
}

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});
