declare global {
    namespace Express {
        export interface Request {
            userId?: string;
        }
    }
}
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import SignupAuth from "./SignupAuth";
import LoginAuth from "./LoginAuth";
import { BACKEND_URL1 } from "./config";
import productrouter from "./productRoutes";
import UserInfo from "./userInfo";
const app = express();
app.use(express.json())
app.use(cors())
app.use("/api/v1/auth", SignupAuth)
app.use("/api/v1/auth", LoginAuth)
app.use("/api/v1/product", productrouter)
app.use("/api/v1/userinfo", UserInfo)
async function main() {
    if (!BACKEND_URL1) {
        throw new Error("MongoDB URI is not defined in environment variables");
    }
    await mongoose.connect(BACKEND_URL1);
    app.listen(3000);
    console.log("listening on port 3000");
}

main();