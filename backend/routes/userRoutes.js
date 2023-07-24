const express = require('express');
const { registerUser, authUser,allUsers } = require("../controllers/userControllers");
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

//Register the user
router.route('/').post(registerUser).get(protect, allUsers);//dono ko alag bhi likh sakte hai get aur post ko
//Login the user  another way of writing but cannot be chained
//router.post('/login', authUser)
router.route('/login').post(authUser);

module.exports = router;