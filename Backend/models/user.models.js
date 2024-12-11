import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        cartData: {
            type: Object,
            default: {}
        }
    },
    {
        timestamps: true,
        minimize: false
    })
    
// Why use minimize: false?
// You might want to use minimize: false in scenarios where you want to explicitly store all fields, 
// even if they're empty. For instance, in our schema, we have a cartData field of type Object with a default value of {} (an empty object). 
// If minimize were set to true, Mongoose could remove the cartData field entirely from the database if it's an empty object, which might not be what you want
// By setting minimize: false, you ensure that the cartData field will be explicitly stored in MongoDB, even if it's empty.


export const User = mongoose.models.User || mongoose.model("User", UserSchema);