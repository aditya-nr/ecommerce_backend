import ProductModel from "../models/product.model.js";

export const AddProduct = async (req, res, next) => {
    try {
        const { name, desc, catergory, cost, discount, size, material, gender, tags, image, sid } = req.body;
        await ProductModel.create({ name, desc, catergory, cost, discount, size, material, gender, tags, image, sid });
        res.status(201).json({ status: "OK", message: "Product Added" })

    } catch (error) {
        res.status(500).json({ status: "ERROR", message: "Something went wrong" });
    }
}

export const getProducts = async (req, res, next) => {
    try {
        const data = await ProductModel.find({});
        res.status(201).json({ status: "OK", data })

    } catch (error) {
        res.status(500).json({ status: "ERROR", message: "Something went wrong" });
    }
}