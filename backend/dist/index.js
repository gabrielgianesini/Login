"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const teste_1 = require("./testes/teste");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/login", (req, res) => {
    res.send({
        token: "test123",
    });
});
app.listen(3002, () => console.log("API is running on port 5001"));
(0, teste_1.enviaTeste)();
