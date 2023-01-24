import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextInput from "./TextInput";


function FormDialog () {


    return (
      <Dialog
      open={this.props.open}
      onClose={this.props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        この内容でお間違いなければ<br/>下の『依頼する』を選択してください
      </DialogTitle>
      <DialogContent>
          <TextInput />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.props.handleClose}>依頼する</Button>
        <Button onClick={this.props.handleClose} autoFocus>
          戻る
        </Button>
      </DialogActions>
    </Dialog>

    )
  
}

export default FormDialog


