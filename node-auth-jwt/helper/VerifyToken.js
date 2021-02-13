const jwt = require('jsonwebtoken');

const Auth = (req, res, next) => {
	const token = req.header('auth-token');
	if (!token) return res.status(401).send('Access denied!');
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
		next();
	} catch (error) {
		res.status(500).send(error);
	}
}

module.exports.Auth = Auth;