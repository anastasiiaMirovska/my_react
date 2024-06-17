import Joi from "joi";

const FormValidator = Joi.object({
    increase: Joi.number().min(1).max(200).required().messages({
        "number.required":"This field can`t be empty",
        "number.min":"Minimum size is 1",
        "number.max":"Maximum size is 200"
    })
})

export default FormValidator;

