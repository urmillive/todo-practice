import { mongoose, Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: [ true, 'Email is required' ]
    },
    password: {
        type: String,
        required: [ true, 'Password is required' ]
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User;