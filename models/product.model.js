import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    sid: mongoose.Schema.ObjectId,
    name: String,
    desc: String,
    catergory: String,
    cost: String,
    discount: String,
    size: String,
    material: String,
    gender: String,
    tags: String,
    image: String
});

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;