const express = require('express')

const {postCreate} = require('../controller/postCreate.js')
const router = express.Router()

router.post('/postCreate', postCreate)

module.exports = router