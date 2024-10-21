import mongoose from "mongoose";

const Book = mongoose.model("Book", {
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String
});

export default Book;