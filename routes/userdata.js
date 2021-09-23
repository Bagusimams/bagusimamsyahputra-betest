const express   = require('express')
const router    = express.Router()

const UserDataController      = require('../controllers/UserDataController')
const auth = require("../middleware/auth");

router.get('/', auth, UserDataController.index)
router.get('/show', auth, UserDataController.show)
router.post('/store', auth, UserDataController.store)
router.put('/update', auth, UserDataController.update)
router.delete('/delete', auth, UserDataController.destroy)

module.exports = router