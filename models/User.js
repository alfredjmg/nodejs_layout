const mongoose = require('mongoose');
const Country = require('../models/Country');
const Role = require('../models/Role');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true, 
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    email_verified_at:{
        type: Date,
    },
    country_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Country',
        required: true
    },
    role_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Role',
        required: true
    },
    registered_at:{
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('User', UserSchema)