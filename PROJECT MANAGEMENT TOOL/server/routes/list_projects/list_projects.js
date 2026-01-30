var router = require("express").Router();
const { tokenCheckMiddleWare } = require("../../utils/token");
router.use(tokenCheckMiddleWare);
router.post("/list_projects", (req, res) => {
	const { UserModel } = require("../../db");
	UserModel.findById(req._token_data.data)
		.select("projects")
		.exec((err, data) => {
			if (err) throw err;
			if (data)
				res.json({
					error: null,
					projects: data.projects
				});
		});
});
module.exports = router;
