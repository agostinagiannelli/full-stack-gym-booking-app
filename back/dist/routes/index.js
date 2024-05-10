"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersRouter_1 = __importDefault(require("./usersRouter"));
var appointmentsRouter_1 = __importDefault(require("./appointmentsRouter"));
var router = (0, express_1.Router)();
router.use('/users', usersRouter_1.default);
router.use('/appointments', appointmentsRouter_1.default);
exports.default = router;
