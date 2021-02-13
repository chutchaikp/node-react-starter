
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const passwordHash = async (req, res, next) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		req.body.password = hashedPassword;
		next();
	} catch (error) {
		return res.status(500).send(error);
	}
}

const loginValid = async (req, res, next) => {
	const { email, password } = req.body;
	// Check exist
	const userExist = await User.findOne({ email });
	if (!userExist) {
		return res.status(400).send('Email does not exist!');
	}
	// Check password
	const validPassword = await bcrypt.compare(password, userExist.password);
	if (!validPassword) {
		return res.status(400).send('Invalid password!');
	}
	req.userExist = userExist;

	next();
}

module.exports.passwordHash = passwordHash;
module.exports.loginValid = loginValid;