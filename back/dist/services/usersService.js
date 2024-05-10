"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = exports.registerUserService = exports.getUserByIdService = exports.getUsersService = void 0;
var credentialsService_1 = require("./credentialsService");
var data_source_1 = require("../config/data-source");
var getUsersService = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, data_source_1.userRepository.find({
                        relations: ["credentials", "appointments"]
                    })];
            case 1:
                users = _a.sent();
                if (users.length === 0)
                    throw new Error("No users found");
                return [2, users];
            case 2:
                error_1 = _a.sent();
                throw new Error(error_1.message);
            case 3: return [2];
        }
    });
}); };
exports.getUsersService = getUsersService;
var getUserByIdService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, data_source_1.userRepository.findOne({
                        where: { id: id },
                        relations: ["credentials", "appointments"]
                    })];
            case 1:
                user = _a.sent();
                if (user === null)
                    throw new Error("User not found");
                return [2, user];
            case 2:
                error_2 = _a.sent();
                throw new Error(error_2.message);
            case 3: return [2];
        }
    });
}); };
exports.getUserByIdService = getUserByIdService;
var registerUserService = function (userData) { return __awaiter(void 0, void 0, void 0, function () {
    var credentials, newUser, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4, (0, credentialsService_1.createCredential)({ username: userData.username, password: userData.password })];
            case 1:
                credentials = _a.sent();
                return [4, data_source_1.userRepository.create({
                        name: userData.name,
                        email: userData.email,
                        dateOfBirth: userData.dateOfBirth,
                        identityNumber: userData.identityNumber,
                        credentials: credentials
                    })];
            case 2:
                newUser = _a.sent();
                return [4, data_source_1.userRepository.save(newUser)];
            case 3:
                _a.sent();
                if (!newUser)
                    throw new Error("User not registered");
                return [2, newUser];
            case 4:
                error_3 = _a.sent();
                throw new Error(error_3.message);
            case 5: return [2];
        }
    });
}); };
exports.registerUserService = registerUserService;
var loginUserService = function (credentialsData) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, user, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4, (0, credentialsService_1.validateCredential)(credentialsData)];
            case 1:
                userId = _a.sent();
                return [4, data_source_1.userRepository.findOne({
                        where: { id: userId },
                        relations: ["credentials", "appointments"]
                    })];
            case 2:
                user = _a.sent();
                if (user === null)
                    throw new Error("User not found");
                return [2, user];
            case 3:
                error_4 = _a.sent();
                throw new Error(error_4.message);
            case 4: return [2];
        }
    });
}); };
exports.loginUserService = loginUserService;