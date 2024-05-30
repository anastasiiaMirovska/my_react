import Joi from "joi";

const PostValidator = Joi.object({
    userid:Joi.number().min(0).required().messages({
        "number.min":"User id start from 0"
    }),
    title: Joi.string().min(3).max(100).required().messages({
        "string.min": "Title length must be bigger than 3 characters",
        "string.max": "Title length must be smaller than 100 characters"
    }),
    body: Joi.string().min(10).max(500).required().messages({
        "string.min":"Body must contain at least 10 characters",
        "string.max":"Body must contain less than 500 characters"
    })
})

export default PostValidator