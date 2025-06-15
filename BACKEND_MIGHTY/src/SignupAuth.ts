import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
import { JWT_SECRET } from "./config"
import router from "express";
import { Request, Response } from "express";
const SignupAuth = router();
//@ts-ignore
SignupAuth.post("/signup", async (req: Request, res: Response) => {

    const verifyBody = z.object({
        email: z.string().min(5).max(40),
        password: z.string().min(8).regex(/[a-z]/).regex(/[A-Z]/).regex(/[0-9]/).regex(/[^a-zA-Z0-9]/),
        name: z.string().min(3).max(20),
    });
    type FinalUserSchema = z.infer<typeof verifyBody>
    const parsedbody = verifyBody.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body;
    if (!parsedbody.success) {
        return res.status(403).json({
            message: "Incorrect format",
            error: parsedbody.error
        });
    }
    try {
        const hashedPassword = await bcrypt.hash(updateBody.password, 10);
        await UserModel.create({
            email: updateBody.email,
            password: hashedPassword,
            name: updateBody.name
        });
        res.json({ message: "Signup succeded" })
    } catch (e) {
        res.json({ message: "Admin already axists" })
    }
})



export default SignupAuth;