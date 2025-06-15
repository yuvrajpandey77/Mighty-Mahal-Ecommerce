import mongoose, { Schema, Document } from "mongoose";
import { ObjectId } from "mongoose";
import { BACKEND_URL1 } from "./config";


const UserSchema = new mongoose.Schema({
    email: {type:String, required:true,  unique:true},
    password:{type:String, required:true},  
    name:{type:String, required:true},
});
export const UserModel = mongoose.model("User",UserSchema)


interface IProduct extends Document {
  title: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  category?: string;
  adminId: mongoose.Types.ObjectId;
  initialPrice?: number;
}


const ProductSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    adminId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    initialPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);