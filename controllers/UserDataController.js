const { response } = require('express')
const UserData = require('../models/UserData')

// List
const index = (req, res, next) => {
    UserData.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An Error Occured'
        })
    })
}
//show single userdata
const show =(req, res, next) => {
    let userdataID = req.query.userdataID
    UserData.findById(userdataID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })    
    })
}

// add new
const store = (req, res, next) => {
    let userdata = new UserData({
        Id: req.body.Id,
        userName: req.body.userName,
        accountNumber: req.body.accountNumber,
        emailAddress: req.body.emailAddress,
        identityNumber: req.body.identityNumber
    })
    userdata.save()
    .then(response => {
        res.json({
            message: 'User data Added Succesfuly'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}


// update userdata
const update = (req, res, next) => {
    let userdataID = req.body.userdataID

    let updateData = {
        Id: req.body.Id,
        userName: req.body.userName,
        accountNumber: req.body.accountNumber,
        emailAddress: req.body.emailAddress,
        identityNumber: req.body.identityNumber
    }

    UserData.findByIdAndUpdate(userdataID, {$set: updateData})
    .then(() => {
        res.json({
            message: 'User data update succesfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

// delete 
const destroy = (req, res, next) => {
    let userdataID = req.body.userdataID
    UserData.findByIdAndRemove(userdataID)
    .then(() => {
        res.json({
            message: 'User Data deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
} 


module.exports = {
    index, show, store, update, destroy
}


