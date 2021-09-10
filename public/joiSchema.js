const Joi = require('joi')


module.exports =
    {
        authMiddleWareSchema: Joi.string().required(),
        userIdObjectSchema: Joi.object({
            userId: Joi.number().min(1).required(),
        }),
        postIdObjectSchema: Joi.object({
            postId: Joi.number().min(1).required(),
        }),
        IdSchema: Joi.number().min(1).required(),
        signSchema: Joi.object({
            email: Joi.string()
                .pattern(new RegExp(
                    "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,5}$"
                ))
                .required(),
            name: Joi.string()
                .pattern(new RegExp("^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣\\s|0-9a-zA-z]{2,30}$"))
                .required(),
            nickname: Joi.string()
                .pattern(new RegExp("^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣\\s|0-9a-zA-z]{1,30}$"))
                .required(),
            password: Joi.string()
                .pattern(new RegExp("^(?=.*[a-zA-Z0-9])((?=.*\\d)|(?=.*\\W)).{6,20}$"))
                .required(),
            confirm: Joi.string()
                .pattern(new RegExp("^(?=.*[a-zA-Z0-9])((?=.*\\d)|(?=.*\\W)).{6,20}$"))
                .required(),
            age: Joi.number().min(1).required()
        }),
        loginSchema: Joi.object({
            email: Joi.string()
                .pattern(new RegExp(
                    "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$"
                ))
                .required(),
            password: Joi.string()
                .pattern(new RegExp("^(?=.*[a-zA-Z0-9])((?=.*\\d)|(?=.*\\W)).{6,20}$"))
                .required(),
            confirm: Joi.string()
                .pattern(new RegExp("^(?=.*[a-zA-Z0-9])((?=.*\\d)|(?=.*\\W)).{6,20}$"))
                .required(),
        })
    };