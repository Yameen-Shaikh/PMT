const { model } = require("mongoose");
const { UserSchema } = require("../../schemas");
var UserModel = new model("User", UserSchema);
module.exports = UserModel;
