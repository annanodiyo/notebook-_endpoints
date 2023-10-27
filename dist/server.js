"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const server = (0, express_1.default)();
server.use(body_parser_1.default.json());
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
});
