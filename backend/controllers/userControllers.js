const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    console.log("welcome");
    const { name, email, password, pic } = req.body;

    if(!name || !email || !password)
    {
        resizeBy.status(400);
        throw new Error("Please enter all the fields");
    }
    const userExists = await User.findOne();
    if(userExists)
    {
        resizeBy.status(400);
        throw new Error("User already exists");
    }
    console.log("1");
    const user = await User.create({
        name,
        email,
        password,
        pic,
    });
    console.log("2");
    if(user)
    {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    }
    else
    {
        res.status(400);
        throw new Error("Failed to create the user");
    }
});

module.exports = {registerUser};