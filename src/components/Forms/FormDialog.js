"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
const DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
const DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
const DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
function FormDialog(props) {
    console.log(props);
    return (react_1.default.createElement(Dialog_1.default, { open: props.open, onClose: props.handleClose, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description" },
        react_1.default.createElement(DialogTitle_1.default, { id: "alert-dialog-title" },
            "\u3053\u306E\u5185\u5BB9\u3067\u304A\u9593\u9055\u3044\u306A\u3051\u308C\u3070",
            react_1.default.createElement("br", null),
            "\u4E0B\u306E\u300E\u4F9D\u983C\u3059\u308B\u300F\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"),
        react_1.default.createElement(DialogContent_1.default, null, props.selectedAnswers.map((selectedAnswer, index) => {
            return (
            // 選択した解答を表示する処理
            react_1.default.createElement("div", { key: index.toString(), className: "selected-modal" }, selectedAnswer));
        })),
        react_1.default.createElement(DialogActions_1.default, null,
            react_1.default.createElement(Button_1.default, { onClick: props.handleClose }, "\u4F9D\u983C\u3059\u308B"),
            react_1.default.createElement(Button_1.default, { onClick: props.handleClose }, "\u623B\u308B"))));
}
exports.default = FormDialog;
