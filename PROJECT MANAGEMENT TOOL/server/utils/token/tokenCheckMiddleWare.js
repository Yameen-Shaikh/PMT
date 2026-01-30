var decode = require("./decode");

module.exports = (req, res, next) => {
	const token = req.headers.auth;
	try {
		req._token_data = decode(token);
		next();
	} catch (err) {
		res.json({
			error: 0x02
		});
	}
};
