import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    password:{
        type : String,
        require : true,
    }
})

const User = mongoose.model("User", userSchema);

export default User;