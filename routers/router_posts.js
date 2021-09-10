const express = require('express')
const router = express.Router()
const authMiddleWare = require('../middleware/authMiddleWare');


router.route('/:postId')
    .get(authMiddleWare, async (req, res) => {
        try {
        } catch (error) {
            console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
            res.status(400).send({
                errorMessage: '게시물을 불러오던 중 오류가 발생하였습니다.'
            })
        }
    })
router.route('/')
    .post(async (req, res) => {
        try {
        } catch (error) {
            console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
            res.status(400).send({
                errorMessage: '게시물을 불러오던 중 오류가 발생하였습니다.'
            })
        }
    })

module.exports = router
