const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        pic: { type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_EMU4QqmBUtac-Fhht2ntaII-9dUB8Q1sA&usqp=CAU" },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;