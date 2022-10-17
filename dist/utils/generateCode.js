"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCode = void 0;
function generateCode() {
    const FIX_LENGTH = 6;
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < FIX_LENGTH; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateCode = generateCode;
