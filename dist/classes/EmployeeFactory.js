"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Manager_1 = __importDefault(require("./Manager"));
const Developer_1 = __importDefault(require("./Developer"));
const Tester_1 = __importDefault(require("./Tester"));
const Designer_1 = __importDefault(require("./Designer"));
const roles_1 = require("../types/roles");
class EmployeeFactory {
    static getEmployee(role, input) {
        if (role == roles_1.Role.Manager)
            return new Manager_1.default(...input);
        else if (role == roles_1.Role.Developer)
            return new Developer_1.default(...input);
        else if (role == roles_1.Role.Tester)
            return new Tester_1.default(...input);
        else if (role == roles_1.Role.Designer)
            return new Designer_1.default(...input);
        else
            throw new Error("Type not found");
    }
}
exports.default = EmployeeFactory;
