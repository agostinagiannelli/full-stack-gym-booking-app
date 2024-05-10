"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var server_1 = __importDefault(require("./server"));
var envs_1 = require("./config/envs");
var data_source_1 = require("./config/data-source");
data_source_1.AppDataSource.initialize()
    .then(function () {
    console.log("Database connected");
    server_1.default.listen(envs_1.PORT, function () {
        console.log("Server listening on port ".concat(envs_1.PROTO, "://").concat(envs_1.HOST, ":").concat(envs_1.PORT));
    });
})
    .catch(function (err) {
    console.log(err);
});
