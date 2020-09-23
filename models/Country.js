const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
    country_abbreviation: {
        type: String,
        required: true,
        trim: true
    },
    country_name:{
        type: String,
        required: true,
        trim: true
    },
    country_code:{
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Country', CountrySchema)