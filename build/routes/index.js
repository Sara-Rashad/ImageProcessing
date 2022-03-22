"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeImage_1 = __importDefault(require("./api/resizeImage"));
var routes = express_1.default.Router();
routes.get("/", function (req, res) {
    res.status(200).send("Main Route");
});
routes.use("/resizeImage", resizeImage_1.default);
exports.default = routes;
