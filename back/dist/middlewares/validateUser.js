"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
var validateUser = function (req, res, next) {
    try {
        var _a = req.body, name = _a.name, email = _a.email, dateOfBirth = _a.dateOfBirth, identityNumber = _a.identityNumber, username = _a.username, password = _a.password;
        if (!name)
            throw new Error("Missing field: name");
        if (!email)
            throw new Error("Missing field: email");
        if (!dateOfBirth)
            throw new Error("Missing field: dateOfBirth");
        if (!identityNumber)
            throw new Error("Missing field: identityNumber");
        if (!username)
            throw new Error("Missing field: username");
        if (!password)
            throw new Error("Missing field: password");
        next();
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.validateUser = validateUser;
