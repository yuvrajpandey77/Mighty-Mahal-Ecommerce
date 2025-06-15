import { Router } from "express";
import { UserModel } from "./db";
const UserInfo = Router();

   UserInfo.get('/api/userinfo', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        //@ts-ignore
        const userId = req.user.id; 
        const user = UserModel.findById(userId); 
        res.json(user);
    }
});

export default UserInfo;
