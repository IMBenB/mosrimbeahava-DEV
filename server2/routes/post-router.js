const express = require('express')

const {postCreate} = require('../controller/postCreate.js')
const {getPosts} = require('../controller/getPosts.js')
const router = express.Router()

router.post('/postCreate', postCreate)
router.post('/getPosts', getPosts)

module.exports = router