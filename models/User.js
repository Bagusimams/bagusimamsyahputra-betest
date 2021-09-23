const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const userSchema    = new Schema({
    id: {
        type: Number 
    },
    userName:   {
        type: String
    },
    accountNumber: {
        type: Number
    },
    emailAddress: {
        type: String
    },
    identityNumber: {
        type: Number
    },
    password: {
        type: String
    }
}, {timestamps: true}) 

const User = mongoose.model('User', userSchema)
module.exports = User