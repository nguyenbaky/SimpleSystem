import * as Joi from 'joi'

export const DataSchema: Joi.ObjectSchema = Joi.object({
    deviceId: Joi.string().required(),
    deviceType: Joi.string().required(),
    deviceName: Joi.string().required(),
    groupId: Joi.string().required(),
    dataType: Joi.string().required(),
    timestamp: Joi.date().required()
}).options({
    abortEarly: false,
});