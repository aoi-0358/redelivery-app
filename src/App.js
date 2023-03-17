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
const react_1 = __importStar(require("react"));
const dataset_1 = __importDefault(require("./dataset"));
require("./assets/styles/style.css");
const index_1 = require("./components/index");
const FormDialog_1 = __importDefault(require("./components/Forms/FormDialog"));
function App() {
    const [answers, setAnswers] = (0, react_1.useState)(dataset_1.default.init.answers);
    const [chats, setChats] = (0, react_1.useState)([dataset_1.default.init.question]);
    const [selectedAnswers, setSelectedAnswers] = (0, react_1.useState)([]);
    const [currentId, setCurrentId] = (0, react_1.useState)("init");
    const [dataset, setDataset] = (0, react_1.useState)(dataset_1.default);
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const handleClickOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    // 答えを選択したタイミングで発火
    const handleChange = (content, nextId) => {
        console.log("content", content);
        console.log("nextId", nextId);
        // ↓↓だけだといつでも入れ込んでいる状態だから、『内容を確認する』も取れてしまう
        // なのでif文に↓↓をいれて取得したい『選択の解答』を取得できる
        // setSelectedAnswers((prevContent) => [...prevContent, content]);
        // idがinitのときはinit配下のanswersをsetAnswersする。
        if (nextId === "init") {
            setAnswers(dataset_1.default.init.answers);
            setSelectedAnswers((prevContent) => [...prevContent, content]);
        }
        // id が delivery_time の時はdelivery_time 配下のanswersをsetAnswersする
        if (nextId === "delivery_time") {
            setAnswers(dataset_1.default.delivery_time.answers);
            setChats((prevChat) => [...prevChat, { text: content }]);
            setSelectedAnswers((prevContent) => [...prevContent, content]);
            setTimeout(() => setChats((prevChat) => [
                ...prevChat,
                dataset_1.default.delivery_time.question,
            ]), 500);
        }
        // id が job_offer の時は job_offer配下のanswersをsetAnswersする
        if (nextId === "job_offer") {
            setAnswers(dataset_1.default.job_offer.answers);
            setChats((prevChat) => [...prevChat, { text: content }]);
            setSelectedAnswers((prevContent) => [...prevContent, content]);
            setTimeout(() => 
            // あおいが実装したところ
            setChats((prevChat) => [
                ...prevChat,
                dataset_1.default.job_offer.question,
            ]), 500);
        }
        // id が method の時はmethot配下のanswersをsetAnswersする
        if (nextId === "method") {
            setAnswers(dataset_1.default.method.answers);
            setChats((prevChat) => [...prevChat, { text: content }]);
            setSelectedAnswers((prevContent) => [...prevContent, content]);
            setTimeout(() => setChats((prevChat) => [
                ...prevChat,
                dataset_1.default.method.question,
            ]), 500);
        }
        if (nextId === "contact") {
            handleClickOpen();
        }
    };
    return (<section className="c-sention">
      <div className="c-box">
        <index_1.Chats chats={chats}/>
        <FormDialog_1.default open={isOpen} handleClose={handleClose} selectedAnswers={selectedAnswers}/>

        <index_1.AnswersList answers={answers} select={handleChange}/>
      </div>
    </section>);
}
exports.default = App;
