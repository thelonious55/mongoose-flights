const express = require('express')
const router = express.Router()
const departsCtrl = require('../controllers/departs')

router.post('/flights/:id/departs', departsCtrl.create)

module.exports = router