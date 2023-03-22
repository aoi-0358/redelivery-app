"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(require("react"));
require("./assets/styles/style.css");
const dataset_1 = __importDefault(require("./dataset"));
const AnswersList_1 = __importDefault(require("./components/AnswersList"));
const FormDialog_1 = __importDefault(require("./components/Forms/FormDialog"));
const components_1 = require("./components");
function App() {
    const [answers, setAnswers] = (0, react_1.useState)(dataset_1.default.init.answers);
    const [chats, setChats] = (0, react_1.useState)([
        dataset_1.default.init.question,
    ]);
    const [selectedAnswers, setSelectedAnswers] = (0, react_1.useState)([]);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleClickOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    // 答えを選択したタイミングで発火
    const handleChange = (text, nextId) => {
        if (nextId === "init") {
            setAnswers(dataset_1.default.init.answers);
            setSelectedAnswers((prevtext) => [...prevtext, text]);
        }
        if (nextId === "delivery_time") {
            setAnswers(dataset_1.default.delivery_time.answers);
            setChats((prevChat) => [...prevChat, { text }]);
            setSelectedAnswers((prevtext) => [...prevtext, text]);
            setTimeout(() => setChats((prevChat) => [
                ...prevChat,
                dataset_1.default.delivery_time.question,
            ]), 500);
        }
        if (nextId === "job_offer") {
            setAnswers(dataset_1.default.job_offer.answers);
            setChats((prevChat) => [...prevChat, { text }]);
            setSelectedAnswers((prevtext) => [...prevtext, text]);
            setTimeout(() => setChats((prevChat) => [
                ...prevChat,
                dataset_1.default.job_offer.question,
            ]), 500);
        }
        if (nextId === "method") {
            setAnswers(dataset_1.default.method.answers);
            setChats((prevChat) => [...prevChat]);
            setSelectedAnswers((prevtext) => [...prevtext, text]);
            setTimeout(() => setChats((prevChat) => [
                ...prevChat,
                dataset_1.default.method.question,
            ]), 500);
        }
        if (nextId === "contact") {
            handleClickOpen();
        }
    };
    return (react_1.default.createElement("section", { className: "c-sention" },
        react_1.default.createElement("div", { className: "c-box" },
            react_1.default.createElement(components_1.Chats, { chats: chats }),
            react_1.default.createElement(FormDialog_1.default, { open: isOpen, handleClose: handleClose, selectedAnswers: selectedAnswers }),
            react_1.default.createElement(AnswersList_1.default, { answers: answers, select: handleChange }))));
}
exports.App = App;
