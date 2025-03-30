"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordModule = void 0;
const common_1 = require("@nestjs/common");
const password_service_1 = require("./password.service");
const password_controller_1 = require("./password.controller");
let PasswordModule = class PasswordModule {
};
exports.PasswordModule = PasswordModule;
exports.PasswordModule = PasswordModule = __decorate([
    (0, common_1.Module)({
        providers: [password_service_1.PasswordService],
        controllers: [password_controller_1.PasswordController]
    })
], PasswordModule);
//# sourceMappingURL=password.module.js.map