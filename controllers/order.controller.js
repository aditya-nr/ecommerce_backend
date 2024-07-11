import OrderModel from "../models/order.model.js";

export const placeOrder = async (req, res, next) => {
    try {
        const { orders } = req.body;
        console.log(orders);
        await OrderModel.insertMany(orders);
        res.json({ status: "OK", message: "Order Placed" });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: "Something went wrong" });

    }
}

export const getUidOrder = async (req, res, next) => {
    try {
        const { uid } = req.body;
        console.log(uid);
        const data = await OrderModel.find({ uid });
        res.json({ status: "OK", data });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: "Something went wrong" });

    }
}
export const getSidOrder = async (req, res, next) => {
    try {
        const { sid } = req.body;
        console.log(sid, "sid");
        const data = await OrderModel.find({ sid });
        res.json({ status: "OK", data });
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: "Something went wrong" });

    }
}