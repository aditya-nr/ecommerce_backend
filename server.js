import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Login, Register } from './controllers/auth.controller.js';
import { AddProduct, getProducts } from './controllers/product.controller.js';
import { getUidOrder, getSidOrder, placeOrder } from './controllers/order.controller.js';

//----------------- config
const app = express();
const db_url = "mongodb://127.0.0.1:27017/justbuy"
try {
    await mongoose.connect(db_url);
    console.log("Db Connected ...");
} catch (error) {
    console.log("Something went wrong");
    process.exit(1);
}
//---------------------------

//----------------Middleware
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));
//--------------------------

// ----------------routes
app.get('/test', (req, res) => res.json({ ...req.body, message: "Hello" }))
app.post('/register', Register);
app.post('/login', Login);
app.post('/add-product', AddProduct);
app.get('/all-products', getProducts);
app.post('/place-order', placeOrder);
app.post('/getUidOrder', getUidOrder);
app.post('/getSidOrder', getSidOrder);
//---------------------------
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})