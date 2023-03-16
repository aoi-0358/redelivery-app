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
      {/* App.jsx34 []で囲ってるから{props.selectedAnswers}をmapでまわしたほうがtextの修正があったときに一カ所だけで済む↓↓↓↓

      　map(引数)で配列の各要素の一個ずつに処理が実行できる
        今回選択された解答を取得するように実行したいから、第一引数にselectedAnswersをいれた
        （このselectedAnswersはApp.jsxのuseStateからきたやつ）
        そして、return内で{selectedAnswers}と書いて返すことで、選択された解答を表示することができた。
      
         昨晩の時点では、<DialogContent>に{props.selectedAnswers}を直接入れたので、選択された解答が各要素として認識されなかったので、改行されずに表示されていた。
　　　　　なので<DialogContent>に{props.selectedAnswers.map((selectedAnswer) =>…とすることで選択された解答を順番に取得でき改行されて表示できた
        */}
      <DialogContent>
        {props.selectedAnswers.map((selectedAnswer, index) => {
          return (
            // 選択した解答を表示する処理
            <div key={index.toString()} className="selected-modal">
              {selectedAnswer}
            </div>
          );
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
