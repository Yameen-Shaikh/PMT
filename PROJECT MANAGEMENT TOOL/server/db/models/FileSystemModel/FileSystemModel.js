const { model } = require("mongoose");
const { FileSystemSchema } = require("../../schemas");
var FileSystemModel = new model("FileSystem", FileSystemSchema);

module.exports = FileSystemModel;
