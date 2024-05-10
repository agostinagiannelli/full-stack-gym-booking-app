"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentRepository = exports.credentialRepository = exports.userRepository = exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var envs_1 = require("./envs");
var User_1 = require("../entities/User");
var Credential_1 = require("../entities/Credential");
var Appointment_1 = require("../entities/Appointment");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: envs_1.DB_PORT,
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: ["src/entities/*.ts"],
    subscribers: [],
    migrations: [],
});
exports.userRepository = exports.AppDataSource.getRepository(User_1.User);
exports.credentialRepository = exports.AppDataSource.getRepository(Credential_1.Credential);
exports.appointmentRepository = exports.AppDataSource.getRepository(Appointment_1.Appointment);
