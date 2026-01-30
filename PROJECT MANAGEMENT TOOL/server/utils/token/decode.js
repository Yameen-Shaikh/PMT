const jwt = require("jsonwebtoken");
const { key } = require("../secret");
module.exports = token => {
	return jwt.verify(token, key);
};
