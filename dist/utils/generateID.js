"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
const generateId = () => {
    const subset = "123456789qwertyuiopasdfghjklzxcvbnm";
    const length = 5;
    let id = "";
    for (let i = 0; i < length; i++) {
        id += subset[Math.floor(Math.random() * subset.length)];
    }
    return id;
};
exports.generateId = generateId;
