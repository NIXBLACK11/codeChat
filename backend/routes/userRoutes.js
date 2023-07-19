const express = require('express');
const { registerUser, authUser } = require("../controllers/userControllers");
const router = express.Router();

//Register the user
router.route('/').post(registerUser);

//Login the user  another way of writing but cannot be chained
//router.post('/login', authUser)
router.route('/login').get(authUser);

module.exports = router;