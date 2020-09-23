const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true, 
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    registered_at:{
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model('Role', RoleSchema)