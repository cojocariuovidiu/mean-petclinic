var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    email: String,
    password: String
});

var OwnerSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    city:  String,
    telephone: String
});

mongoose.model('User', UserSchema);
mongoose.model('Owner', OwnerSchema);

module.exports = mongoose;