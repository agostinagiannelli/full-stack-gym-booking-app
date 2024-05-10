"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAppointment = void 0;
var validateAppointment = function (req, res, next) {
    try {
        var _a = req.body, date = _a.date, time = _a.time, userId = _a.userId;
        if (!date)
            throw new Error("Missing field: date");
        if (!time)
            throw new Error("Missing field: time");
        if (!userId)
            throw new Error("Missing field: userId");
        next();
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.validateAppointment = validateAppointment;
