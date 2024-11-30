const mongoose = require('mongoose');

const userDetail = new mongoose.Schema({   
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true,
        
    },
    contact: {
        type: number,
        required: true,
        unique: true
    }
}); 

const userDetails = mongoose.model('userDetails', userDetail);
module.exports = userDetails;
