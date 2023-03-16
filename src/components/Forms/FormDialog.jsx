import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function FormDialog(props) {
  console.log(props);
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        この内容でお間違いなければ
        <br />
        下の『依頼する』を選択してください
      </DialogTitle>
      {/* App.jsx34 []で囲ってるから{props.selectedAnswers}をmapでまわす↓↓↓↓ */}
      <DialogContent>
        {props.selectedAnswers.map((selectedAnswers, index) => {
        return (
          <div key={index.toString()} className="selected-modal">{selectedAnswers}</div>
          )
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>依頼する</Button>
        <Button onClick={props.handleClose}>戻る</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
