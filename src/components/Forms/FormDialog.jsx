import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextInput from "./TextInput";

function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        この内容でお間違いなければ
        <br />
        下の『依頼する』を選択してください
      </DialogTitle>
      <DialogContent>
        <TextInput />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>依頼する</Button>
        <Button onClick={handleClose}>戻る</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
