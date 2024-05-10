"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var Credential_1 = require("./Credential");
var Appointment_1 = require("./Appointment");
var User = (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true, type: 'varchar', length: 100 }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'date', default: new Date() }),
        __metadata("design:type", Date)
    ], User.prototype, "dateOfBirth", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true, type: 'int' }),
        __metadata("design:type", Number)
    ], User.prototype, "identityNumber", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Credential_1.Credential; }),
        (0, typeorm_1.JoinColumn)({ name: 'credentialsId' }),
        __metadata("design:type", Object)
    ], User.prototype, "credentials", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Appointment_1.Appointment; }, function (appointment) { return appointment.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "appointments", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)({ name: 'users' })
    ], User);
    return User;
}());
exports.User = User;
;
