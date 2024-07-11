import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    isSeller: Boolean,
    cart: []
});

const UserModel = mongoose.model("User", userSchema);
export default UserModel;