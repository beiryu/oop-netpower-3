"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roles_1 = require("../types/roles");
class Validation {
    static isNum(str) {
        return !isNaN(parseInt(str));
    }
    static isNonNegativeNum(str) {
        return this.isNum(str) && parseInt(str) >= 0;
    }
    static isRoleExist(index) {
        return index in roles_1.Role === true;
    }
    static isValidDate(dateString) {
        if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
            return false;
        var parts = dateString.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);
        if (year < 1000 || year > 3000 || month == 0 || month > 12)
            return false;
        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
            monthLength[1] = 29;
        return day > 0 && day <= monthLength[month - 1];
    }
}
exports.default = Validation;
