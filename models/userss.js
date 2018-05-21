const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    userType:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    pwd:{
        type: String,
        required: true
    },
});

const User = module.exports = mongoose.model('User',UserSchema);