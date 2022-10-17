"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = __importDefault(require("../utils/constant"));
class Employee {
    constructor(_code, _name, _baseSalary, _level, _onboardDate) {
        this._code = _code;
        this._name = _name;
        this._baseSalary = _baseSalary;
        this._level = _level;
        this._onboardDate = _onboardDate;
    }
    get code() {
        return this._code;
    }
    set code(value) {
        this._code = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(value) {
        this._baseSalary = value;
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._level = value;
    }
    get onboardDate() {
        return this._onboardDate;
    }
    set onboardDate(value) {
        this._onboardDate = value;
    }
    salary() {
        let workingDate = Math.floor((Date.now() - this._onboardDate.getTime()) /
            constant_1.default.millisecondsPerDay()) + 1;
        return this._baseSalary * workingDate + this._level;
    }
    info() {
        console.log(`Code: ${this._code} \nName: ${this._name} \nBase salary: ${this._baseSalary} \nLevel: ${this._level} \nOnboard day: ${this._onboardDate}\n`);
    }
}
exports.default = Employee;
