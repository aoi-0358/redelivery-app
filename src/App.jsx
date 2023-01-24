import React, { useState } from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";
import FormDialog from "./components/Forms/FormDialog";

function App ()  {
 
   const initState = {
      answers: [],
      chats: [],
      // 選択した解答を配列に追加
      selectedAnswers: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };

    const [answers, chats, selectedAnswers, currentId, dataset, open ] = useState(initState)

 


    // selectAnswer = selectAnswer.bind(this);
    // handleClickOpen = handleClickOpen.bind(this);
    // handleClose = handleClose.bind(this);
  

  // 次の質問をチャットエリアに表示する関数
  displayNextQuestion = (nextQuestionId) => {
    const chats = state.chats;

    chats.push({
      text: state.dataset[nextQuestionId].question,
      type: "question",
    });

   setState({
      answers: state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    });
  };
  // 回答が選択された時に呼ばれる関数
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "init":
        setTimeout(() => displayNextQuestion(nextQuestionId), 500);
        break;

      case nextQuestionId === "contact":
        handleClickOpen();
        break;

      default:
        const chats = state.chats;
        // answersに一旦これまでの回答を格納
        const answers = state.selectedAnswers;
        setState({
          // answersに今回選択された解答を追加
          selectedAnswers: [...answers, selectedAnswer],
        });
        chats.push({
          text: selectedAnswer,
          type: "answer",
        });
        setState({
          chats: chats,
        });
        setTimeout(() => displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  };

 const handleClickOpen = () => {
    setState({ open: true });
  };
 const handleClose = () => {
    setState({ open: false });
  };

  // componentDidMount() {
  //   const initAnswer = "";
  //   selectAnswer(initAnswer, state.currentId);
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const scrollArea = document.getElementById("scroll-area");
  //   if (scrollArea) {
  //     scrollArea.scrollTop = scrollArea.scrollHeight;
  //   }
  // }

    return (
      <section className="c-sention">
        <div className="c-box">
          <Chats chats={state.chats} />
          <AnswersList
            answers={state.answers}
            select={selectAnswer}
          />
          <FormDialog
            open={state.open}
            handleClose={handleClose}
            selectedAnswers={state.selectedAnswers}
          />
        </div>
      </section>
    );
}

export default App