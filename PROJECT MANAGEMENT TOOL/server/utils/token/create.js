const jwt = require("jsonwebtoken");
const { key, tokenExpiry } = require("../secret");
module.exports = value =>
	jwt.sign(
		{
			// exp: tokenExpiry(),
			data: value
		},
		key
	);
