const express = require('express')
const crypto = require('crypto');
const Joi = require('../public/joiSchema');
const authMiddleWare = require('../middleware/authMiddleWare');
const {Users, Sequelize} = require('../models');
const router = express.Router()


router.route('/')
    .post(async (req, res) => {
        try {
            const {email, name, nickname, password, confirm, age} = await Joi.signSchema.validateAsync(req.body);
            console.log(email, name, nickname, password, confirm, age);

            if (password !== confirm) {
                res.status(403).send({
                    errorMessage: '비밀번호가 일치하지 않습니다.'
                })
                return;
            }

            const findNickname = await Users.findOne({
                where: {[Sequelize.Op.or]: [{email}, {nickname}]}
            })

            if (findNickname) {
                if (findNickname['dataValues'].email == email)
                    res.status(406).send({
                        errorMessage: '이미 존재하는 이메일입니다.'
                    })
                else if (findNickname['dataValues'].nickname == nickname)
                    res.status(406).send({
                        errorMessage: '이미 존재하는 닉네임입니다.'
                    })
                return;
            }

            const cryptoPassword = crypto
                .createHash('SHA512')
                .update(password)
                .digest('base64');

            // 고유 인덱스를 방지하기 위해 미리 findNickname을 검색
            await Users.create({email, name, nickname, password: cryptoPassword, age})

            res.status(200).send()
        } catch (error) {
            console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
            res.status(400).send({
                errorMessage: '회원가입에 실패 하였습니다.'
            })
        }
    })
router.route('/login')
    .post(async (req, res) => {
        try {


            res.status(200).send()
        } catch (error) {
            console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
            res.status(400).send({
                errorMessage: '로그인에 실패하였습니다.'
            })
        }
    })

router.route('/:userId')
    .get(authMiddleWare, async (req, res) => {
        try {
            res.status(200).send()
        } catch (error) {
            console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
            res.status(400).send({
                errorMessage: '사용자을 불러오던 중 오류가 발생하였습니다.'
            })
        }
    })

module.exports = router
