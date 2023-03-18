import { Type } from "typescript";
import React, { useState } from "react";
import DEFAULT_DATASET from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats, FormDialog} from "./components/index";


function App() {
  const [answers, setAnswers] = useState(DEFAULT_DATASET.init.answers);
  const [chats, setChats] = useState([DEFAULT_DATASET.init.question]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState(DEFAULT_DATASET);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // 答えを選択したタイミングで発火
  const handleChange = (content: string, nextId: string) => {
    console.log("content", content);
    console.log("nextId", nextId);

    // ↓↓だけだといつでも入れ込んでいる状態だから、『内容を確認する』も取れてしまう
    // なのでif文に↓↓をいれて取得したい『選択の解答』を取得できる
    // setSelectedAnswers((prevContent) => [...prevContent, content]);

    // idがinitのときはinit配下のanswersをsetAnswersする。
    if (nextId === "init") {
      setAnswers(DEFAULT_DATASET.init.answers);
      setSelectedAnswers((prevContent) => [...prevContent , content]);
    }

    // id が delivery_time の時はdelivery_time 配下のanswersをsetAnswersする
    if (nextId === "delivery_time") {
      setAnswers(DEFAULT_DATASET.delivery_time.answers);
      setChats((prevChat) => [...prevChat, { text: content }]);
      setSelectedAnswers((prevContent) => [...prevContent, content]);
      setTimeout(
        () =>
          setChats((prevChat) => [
            ...prevChat,
            DEFAULT_DATASET.delivery_time.question,
          ]),
        500
      );
    }

    // id が job_offer の時は job_offer配下のanswersをsetAnswersする
    if (nextId === "job_offer") {
      setAnswers(DEFAULT_DATASET.job_offer.answers);
      setChats((prevChat) => [...prevChat, { text: content }]);
      setSelectedAnswers((prevContent) => [...prevContent, content]);
      setTimeout(
        () =>
          // あおいが実装したところ
          setChats((prevChat) => [
            ...prevChat,
            DEFAULT_DATASET.job_offer.question,
          ]),
        500
      );
    }

    // id が method の時はmethot配下のanswersをsetAnswersする
    if (nextId === "method") {
      setAnswers(DEFAULT_DATASET.method.answers);
      setChats((prevChat) => [...prevChat, { text: content }]);
      setSelectedAnswers((prevContent) => [...prevContent, content]);
      setTimeout(
        () =>
          setChats((prevChat) => [
            ...prevChat,
            DEFAULT_DATASET.method.question,
          ]),
        500
      );
    }

    if (nextId === "contact") {
      handleClickOpen();
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
      </div>
    </section>
  );
}

export default App;
