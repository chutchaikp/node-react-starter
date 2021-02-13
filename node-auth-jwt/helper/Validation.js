const Joi = require('joi');
const User = require('../models/User');

const registerValidation = (req, res, next) => {
	const schema = Joi.object({
		name: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required()
	});
	const { error } = schema.validate(req.body);
	if (error) {
		res.status(400).send(error);
	} else {
		next();
	}
};

const emailExist = async (req, res, next) => {
	try {
		const emailExist = await User.findOne({ email: req.body.email });
		if (emailExist) return res.status(400).send('Email already exists!');
		next();
	} catch (error) {
		res.status(500).send(error);
	}
}

const loginValidattion = (req, res, next) => {
	const schema = Joi.object({
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required()
	});

	const { error } = schema.validate(req.body);
	if (error) {
		res.status(400).send(error);
	} else {
		next();
	}
}

module.exports.registerValidation = registerValidation;
module.exports.emailExist = emailExist;
module.exports.loginValidattion = loginValidattion;