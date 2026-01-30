const { Schema } = require("mongoose");
const ProjectSchema = new Schema();
ProjectSchema.add({
	name: String,
	projecttype: String
});
module.exports = ProjectSchema;
