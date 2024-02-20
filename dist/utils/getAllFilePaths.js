"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFilePaths = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getAllFilePaths = (folderPath) => {
    let allPaths = [];
    const allFilesAndFolders = fs_1.default.readdirSync(folderPath);
    console.log(allFilesAndFolders);
    allFilesAndFolders.forEach(item => {
        const fullFilePath = path_1.default.join(folderPath, item);
        if (fs_1.default.statSync(fullFilePath).isDirectory()) {
            allPaths = allPaths.concat((0, exports.getAllFilePaths)(fullFilePath));
        }
        else {
            allPaths.push(fullFilePath);
        }
    });
    return allPaths;
};
exports.getAllFilePaths = getAllFilePaths;
