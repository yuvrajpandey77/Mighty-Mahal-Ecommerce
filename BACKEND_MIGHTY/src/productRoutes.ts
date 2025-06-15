import express from "express";
import { ProductModel } from "./db";
import { Request, Response } from "express";
import { AuthMiddleware } from "./Middlewares/authenticationmiddleware"; 

const router = express.Router();


//@ts-ignore
router.post("/add", AuthMiddleware, async (req: Request, res: Response) => {
  try {
    const { title, description, rating, price, image, category ,initialPrice} = req.body;
    const adminId = req.userId; 

    const product = new ProductModel({
      title, 
      description,
      rating,
      price,
      image,
      category,
      adminId,
      initialPrice,
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully!", product });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});


router.get("/", async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});


//@ts-ignore
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});


//@ts-ignore
router.delete("/id/delete", AuthMiddleware, async (req: Request, res: Response) => {
  try {
    const product = await ProductModel.findById(req.body.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    
    if (product.adminId.toString() !== (req as any).user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await ProductModel.findByIdAndDelete(req.body.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

export default router;
