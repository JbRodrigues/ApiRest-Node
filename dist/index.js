"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.use(user_routes_1.default);
app.get('/status', (req, res, next) => {
    res.status(200).send({ Status: 'Sucess!' });
});
app.listen(3000, () => {
    console.log("Running: Port 3000!");
});
