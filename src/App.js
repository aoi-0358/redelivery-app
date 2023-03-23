"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(require("react"));
require("./assets/styles/style.css");
const components_1 = require("./components");
const App = () => react_1.default.createElement(components_1.Chats, { chats: [] });
exports.App = App;
