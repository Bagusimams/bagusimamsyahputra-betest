const { Timestamp } = require('bson')
const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const userdataSchema    = new Schema({
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
    }
}, {timestamps: true})

const UserData = mongoose.model('UserData', userdataSchema)
module.exports = UserData