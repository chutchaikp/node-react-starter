const express = require('express');
const router = express.Router();
const { route } = require('./auth');
const { Auth } = require('../helper/VerifyToken')

router.get('/', Auth, (req, res) => {
	console.log(req.user); // log user request

	res.json({
		posts: [
			{ title: "post 01" },
			{ title: "post 02" }
		]
	});
});

module.exports = router;
