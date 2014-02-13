var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OwnerSchema = new Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    telephone: String
});

var VetSchema = new Schema({
    firstName: String,
    lastName: String,
    specialties: [
        {name: String}
    ]
});

mongoose.model('Owner', OwnerSchema);
mongoose.model('Vet', VetSchema);

module.exports = mongoose;