"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const List_1 = __importDefault(require("@material-ui/core/List"));
const _1 = require("./");
const useStyles = (0, styles_1.makeStyles)((theme) => (0, styles_1.createStyles)({
    chats: {
        height: 400,
        padding: "0",
        overflow: "auto",
    },
}));
const Chats = (props) => {
    const { chats } = props;
    const classes = useStyles();
    return (react_1.default.createElement(List_1.default, { className: classes.chats, id: "scroll-area" }, chats.map((chat, index) => {
        return (react_1.default.createElement(_1.Chat, { text: chat.text, type: chat.type, key: index.toString() }));
    })));
};
exports.default = Chats;
