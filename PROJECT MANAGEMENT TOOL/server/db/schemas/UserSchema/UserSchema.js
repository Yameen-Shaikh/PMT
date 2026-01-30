const { Schema } = require("mongoose");
var ProjectSchema = require("../ProjectSchema/ProjectSchema");
const UserSchema = new Schema({
	username: String,
	password: String,
	projects: [ProjectSchema]
});
module.exports = UserSchema;
