import dotenv from 'dotenv';
dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET;
export const BACKEND_URL1 = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 3000;