import React, { useState } from "react";
import "./assets/styles/style.css";

import { AnswerListType } from "./dataset";
import { ChatsType } from "./dataset";
import DEFAULT_DATASET from "./dataset";

import AnswersList from "./components/AnswersList";
import FormDialog from "./components/Forms/FormDialog";
import Chats from "./components/Chats";

function App() {
  const [answers, setAnswers] = useState<AnswerListType>(
    DEFAULT_DATASET.init.answers
  );
  const [chats, setChats] = useState<ChatsType>([
    DEFAULT_DATASET.init.question,
  ]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // 答えを選択したタイミングで発火
  const handleChange = (text: string, nextId: string) => {
    console.log("text", text);
    console.log("nextId", nextId);

    // ↓↓だけだといつでも入れ込んでいる状態だから、『内容を確認する』も取れてしまう
    // なのでif文に↓↓をいれて取得したい『選択の解答』を取得できる
    // setSelectedAnswers((prevContent) => [...prevContent, text]);

    // idがinitのときはinit配下のanswersをsetAnswersする。
    if (nextId === "init") {
      setAnswers(DEFAULT_DATASET.init.answers);
      setSelectedAnswers((prevContent) => [...prevContent, text]);
    }

    // id が delivery_time の時はdelivery_time 配下のanswersをsetAnswersする
    if (nextId === "delivery_time") {
      setAnswers(DEFAULT_DATASET.delivery_time.answers);
      setChats((prevChat: ChatsType) => [...prevChat, { text }]);
      setSelectedAnswers((prevContent) => [...prevContent, text]);
      setTimeout(
        () =>
          setChats((prevChat: ChatsType) => [
            ...prevChat,
            DEFAULT_DATASET.delivery_time.question,
          ]),
        500
      );
    }

    // id が job_offer の時は job_offer配下のanswersをsetAnswersする
    if (nextId === "job_offer") {
      setAnswers(DEFAULT_DATASET.job_offer.answers);
      setChats((prevChat: ChatsType) => [...prevChat, text]);
      setSelectedAnswers((prevContent) => [...prevContent, text]);
      setTimeout(
        () =>
          // あおいが実装したところ
          setChats((prevChat: ChatsType) => [
            ...prevChat,
            DEFAULT_DATASET.job_offer.question,
          ]),
        500
      );
    }

    // id が method の時はmethot配下のanswersをsetAnswersする
    if (nextId === "method") {
      setAnswers(DEFAULT_DATASET.method.answers);
      // [{text: string, type?: string} ...] => [{text: string, type?: string} ..., {text: string}]
      setChats((prevChat: ChatsType) => [...prevChat, text]);
      setSelectedAnswers((prevContent) => [...prevContent, text]);
      setTimeout(
        () =>
          setChats((prevChat: ChatsType) => [
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
