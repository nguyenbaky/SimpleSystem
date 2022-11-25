import * as Joi from 'joi'

export const DataSchema: Joi.ObjectSchema = Joi.object({
    deviceId: Joi.string().required(),
    deviceType: Joi.string().required(),
    deviceName: Joi.string().required(),
    groupId: Joi.string().required(),
    dataType: Joi.string().required(),
    timestamp: Joi.date().required(),
    data: Joi.object().keys({
        temperature: Joi.number(),
        humidity: Joi.number(),
        occupancy: Joi.bool(),
        fullPowerMode: Joi.bool(),
        activePowerControl: Joi.bool(),
        firmwareVersion: Joi.number(),
        version: Joi.number(),
        messageType: Joi.string(),
        stateChanged: Joi.number()
    })
}).options({
    abortEarly: false,
});