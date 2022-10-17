"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Manager extends Employee_1.default {
    info() {
        console.log("\n\nThis is a manager");
        super.info();
    }
    calcSalary() {
        return super.salary();
    }
}
exports.default = Manager;
