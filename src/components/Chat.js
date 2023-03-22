"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const react_1 = __importDefault(require("react"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const ListItemAvatar_1 = __importDefault(require("@material-ui/core/ListItemAvatar"));
const Chat = (props) => {
    const isQuestion = props.type === "question";
    const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";
    return (react_1.default.createElement(ListItem_1.default, { className: classes },
        react_1.default.createElement(ListItemAvatar_1.default, null, isQuestion ? (
        // <Avatar alt="icon" src={Torahack} />
        react_1.default.createElement("div", null, "Torahack")) : (
        // <Avatar alt="icon" src={NoProfile} />
        react_1.default.createElement("div", null, "NoProfile"))),
        react_1.default.createElement("div", { className: "p-chat__bubble" }, props.text)));
};
exports.Chat = Chat;
exports.default = exports.Chat;
