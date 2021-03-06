const mongoose = require('mongoose');

const SupplierSchema = mongoose.Schema({
    first_name:{
        type: String,
        trim: true
    },
    last_name:{
        type: String,
        trim: true
    },
    company_name:{
        type: String,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        trim: true
    },
    state:{
        type: String,
        required: true,
        trim: true
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    postal_code:{
        type: String,
        required: true,
        trim: true
    },
    user_id:{
        type: String,
        required: true,
    },
    registered_at:{
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('Supplier', SupplierSchema)