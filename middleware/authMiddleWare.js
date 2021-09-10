const jwt = require('jsonwebtoken')
const Joi = require('../public/joiSchema')
const {Users} = require('../models')
module.exports = async (req, res, next) => {
    try {
        const Authorization = await Joi.authMiddleWareSchema.validateAsync(
            req.headers.authorization ? req.headers.authorization : req.cookies.authorization
        );
        console.log(Authorization);

        next();
    } catch (error) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        res.status(401).send({
            errorMessage: '사용자 인증에 실패 하였습니다.'
        })
    }
}
