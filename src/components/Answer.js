"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const useStyles = (0, styles_1.makeStyles)(() => (0, styles_1.createStyles)({
    button: {
        borderColor: "#FFB549",
        color: "#FFB549",
        fontWeight: 600,
        marginBottom: "8px",
    },
}));
const Answer = (props) => {
    const classes = useStyles();
    return (react_1.default.createElement(Button_1.default, { className: classes.button, variant: "outlined", onClick: () => props.select(props.content, props.nextId) }, props.content));
};
exports.default = Answer;
