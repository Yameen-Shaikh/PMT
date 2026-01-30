var router = require("express").Router();
const { UserModel } = require("../../db");
const { create } = require("../../utils/token");
router.post("/login", ({ body: { username, password } }, res) => {
	UserModel.findOne({ username, password }).exec((err, data) => {
		if (err) throw err;
		if (data)
			res.json({
				token: create(data._id),
				error: null
			});
		else
			res.json({
				error: 0x01
			});
	});
});

module.exports = router;
