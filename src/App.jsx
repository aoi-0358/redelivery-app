import React, { useState } from "react";
import DEFAULT_DATASET from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";
import FormDialog from "./components/Forms/FormDialog";
function App() {
  const [answers, setAnswers] = useState(DEFAULT_DATASET.init.answers);
  const [chats, setChats] = useState([DEFAULT_DATASET.init.question]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState(DEFAULT_DATASET);
  const [isOpen, setIsOpen] = useState(false);

  // 次の質問をチャットエリアに表示する関数
  const displayNextQuestion = (nextQuestionId) => {
    const chats = chats;

    chats.push({
      text: dataset[nextQuestionId].question,
      type: "question",
    });

    chats({
      answers: dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    });
  };
  // 回答が選択された時に呼ばれる関数
  const selectedAnswer = (selectedAnswer, nextQuestionId) => {
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
        selectedAnswers({
          // answersに今回選択された解答を追加
          selectedAnswers: [...answers, selectedAnswer],
        });
        chats.push({
          text: selectedAnswer,
          type: "answer",
        });
        chats({
          chats: chats,
        });
        setTimeout(() => displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  };

  const handleClickOpen = () => {
    dataset({ open: true });
  };
  const handleClose = () => {
    dataset({ open: false });
  };

  // componentDidMount() {
  //   const initAnswer = "";
  //   selectAnswer(initAnswer, currentId);
  // }
  const handleChange = (content, nextId) => {
    // id が delivery_time の時はdelivery_time 配下のanswersをsetAnswersする
    if (nextId === "delivery_time") {
      setAnswers(DEFAULT_DATASET.delivery_time.answers);
    }

    // id が job_offer の時は job_offer配下のanswersをsetAnswersする
    if (nextId === "job_offer") {
      setAnswers(DEFAULT_DATASET.job_offer.answers);
    }

    // id が method の時はmethot配下のanswersをsetAnswersする
    if (nextId === "method") {
      setAnswers(DEFAULT_DATASET.method.answers);
    }
    // idがinitのときはinit配下のanswersをsetAnswersする。
    if (nextId === "init") {
      setAnswers(DEFAULT_DATASET.init.answers);
    }
  };
  return (
    <section className="c-sention">
      <div className="c-box">
        <Chats chats={chats} />
        <FormDialog
          open={isOpen}
          handleClose={handleClose}
          selectedAnswers={selectedAnswers}
        />

        <AnswersList answers={answers} select={handleChange} />
        <FormDialog selectedAnswers={selectedAnswers} />
      </div>
    </section>
  );
}

export default App;
