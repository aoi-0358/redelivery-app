"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const _1 = require("./");
const AnswersList = (props) => {
    const { answers, select } = props;
    return (react_1.default.createElement("div", { className: "c-grid__answer" }, answers.map((value, index) => {
        return (react_1.default.createElement(_1.Answer, { content: value.content, nextId: value.nextId, key: index.toString(), select: select }));
    })));
};
exports.default = AnswersList;
