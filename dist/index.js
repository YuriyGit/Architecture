"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((req, res, next) => {
    console.log(`Вpемя: ${Date.now()}`);
    next();
});
app.get('/hello', (req, res) => {
    throw new Error('Error');
});
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(401).send(err.message);
});
app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server running at http://localhost:${PORT}`);
});
