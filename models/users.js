var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/Userss');

var UserSchema = new mongoose.Schema({
	firstName: String,
	text: String
});

module.exports = mongoose.model("Userss", UserSchema);