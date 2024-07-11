import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    sid: mongoose.Schema.ObjectId,
    uid: mongoose.Schema.ObjectId,
    pid: mongoose.Schema.ObjectId,
}, { timestamps: true });

const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;