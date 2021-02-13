const express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { registerValidation, loginValidattion, emailExist } = require('../helper/Validation');
const { passwordHash, loginValid } = require('../helper/LoginUtil');

router.post('/register', registerValidation, emailExist, passwordHash, async (req, res) => {
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});
	try {
		const saved = await user.save();
		res.send(saved);
	} catch (error) {
		res.status(400).send(error);
	}
});

router.post('/login', loginValidattion, loginValid, async (req, res) => {
	debugger;
	const { userExist } = req;
	// Create & assign Token
	const token = jwt.sign({ _id: userExist._id }, process.env.TOKEN_SECRET);
	res.header('auth-token', token).send(token);
});

module.exports = router;