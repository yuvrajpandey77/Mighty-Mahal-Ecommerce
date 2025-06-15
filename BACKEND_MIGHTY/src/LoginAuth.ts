import { UserModel } from "./db";
import { JWT_SECRET } from "./config"
import router from "express";
import { Request, Response } from "express";
const LoginAuth = router(); 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//@ts-ignore
LoginAuth.post("/login", async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const isUser = await UserModel.findOne({
            email,
        })
        if (!isUser || !(await bcrypt.compare(password, isUser.password))) {
            return res.status(403).json({
                message: "Invalid credentials"
            });
        } else {
            const token = jwt.sign({
                id: isUser._id
            }, JWT_SECRET || "")

            res.json({
                token
            });
        }
    } catch (e) {
        res.status(403).json({
            message: "error while loging in, check user credentials"
        })
    }
})

export default LoginAuth;