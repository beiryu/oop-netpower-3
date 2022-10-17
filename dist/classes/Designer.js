"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("./Employee"));
class Designer extends Employee_1.default {
    info() {
        console.log("This is a designer");
        super.info();
    }
    calcSalary() {
        return super.salary();
    }
}
exports.default = Designer;
