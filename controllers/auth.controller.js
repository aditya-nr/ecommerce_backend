import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
const jwt_secret = "q43052rjqwmreq24rx4142xrzf3qr";

export const Register = async (req, res, next) => {
    try {
        console.log(req.body);
        // extract data
        let { fname, lname, email, password, isSeller } = req.body;
        // check if email is already present
        let user = await UserModel.findOne({ email });
        if (user)
            return res.status(400).json({ status: "ERROR", message: "User already exist" });
        // save to db
        await UserModel.create({ fname, lname, email, password, isSeller });
        // return
        res.status(201).json({ status: "OK", message: "User Registered Successfull" })
    } catch (error) {
        res.status(500).json({ status: "ERROR", message: "Something went wrong" });
    }
}

export const Login = async (req, res, next) => {
    try {
        // extract data
        let { email, password } = req.body;
        // save to db
        let user = await UserModel.findOne({ email });
        if (!user) return res.status(401).json({ status: "ERROR", message: "User not exist" });
        if (user.password != password)
            return res.status(401).json({ status: "Error", message: "Password is incorrect" });
        // return
        let token = jwt.sign({ email }, jwt_secret, { expiresIn: '1d' });
        return res.status(201).json({ status: "OK", message: "Login Successfull", jwt: token, user })

    } catch (error) {
        return res.status(500).json({ status: "ERROR", message: "Something went wrong" });
    }
}