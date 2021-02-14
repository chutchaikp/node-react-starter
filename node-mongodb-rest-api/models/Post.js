const { Schema, model } = require("mongoose");

// Descripe what data look like 
const schema = Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = model('Post', schema);