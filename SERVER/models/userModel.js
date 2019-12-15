const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 60,
	},
	username: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 60,
	},
	email: {
		type: String,
        required: true,
        maxlength: 60,
		match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
        type:String,
        required:true,
        maxlength: 80,
	},
	photoURL: {
        type:String,
        maxlength: 80,
    }
});


module.exports = mongoose.model('User', userSchema); 