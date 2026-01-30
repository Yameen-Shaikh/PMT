const { Schema } = require("mongoose");
const FileSystemSchema = new Schema({
	name: String,
	systemtype: String,
	content: String
});
module.exports = FileSystemSchema;
