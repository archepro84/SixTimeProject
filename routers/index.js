const express = require("express")
const router = express.Router()
const router_posts = require('./router_posts')
const router_users = require('./router_users')


router.use('/posts',router_posts);
router.use('/users',router_users)

module.exports = router