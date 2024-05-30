import Joi from "joi";

const FormValidator = Joi.object({
    userId:Joi.number().min(0).max(10).required().messages({
        "number.required":"userId can`t be empty",
        "number.min":"Users` id start from 0",
        "number.max":"Max value is 10"
    }),
    title: Joi.string().min(3).max(100).required().messages({
        "string.required":"Title can`t be empty",
        "string.min": "Title length must be bigger than 3 characters",
        "string.max": "Title length must be smaller than 100 characters"
    }),
    body: Joi.string().min(10).max(500).required().messages({
        "string.required":"Body can`t be empty",
        "string.min":"Body must contain at least 10 characters",
        "string.max":"Body must contain less than 500 characters"
    })
})

export default FormValidator