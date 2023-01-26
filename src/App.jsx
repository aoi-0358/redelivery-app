import React, { useState } from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";
import FormDialog from "./components/Forms/FormDialog";

function App ()  {
  const [answers, chats, selectedAnswers, setState] = useState(); 
  const [selectAnswer] = useState();
  const [displayNextQuestion] = useState();
  const [dataset] = useState(defaultDataset);
  const [open] = useState(false);
  
  //  const initState = {
  //     answers: [],
  //     chats: [],
  //     // 選択した解答を配列に追加
  //     selectedAnswers: [],
  //     currentId: "init",
  //     dataset: defaultDataset,
  //     open: false,
  //   };


    // selectAnswer = selectAnswer.bind(this);
    // handleClickOpen = handleClickOpen.bind(this);
    // handleClose = handleClose.bind(this);
  

  // 次の質問をチャットエリアに表示する関数
  displayNextQuestion = (nextQuestionId) => {
    const chats = chats;

    chats.push({
      text: dataset[nextQuestionId].question,
      type: "question",
    });

   setState({
      answers: dataset[nextQuestionId].answers,
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
        const chats = chats;
        // answersに一旦これまでの回答を格納
        const answers = selectedAnswers;
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
  //   selectAnswer(initAnswer, currentId);
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
          <Chats chats={chats} />
          <AnswersList
            answers={answers}
            select={selectAnswer}
          />
          <FormDialog
            open={open}
            handleClose={handleClose}
            selectedAnswers={selectedAnswers}
          />
        </div>
      </section>
    );
}

export default App