import React, { useState } from "react";
import "./assets/styles/style.css";
import { AnswerListType } from "./dataset";
import { ChatsType } from "./dataset";
import DEFAULT_DATASET from "./dataset";
import AnswersList from "./components/AnswersList";
import FormDialog from "./components/Forms/FormDialog";
import { Chats } from "/Users/okamuraao/Desktop/redelivery-app/src/components";

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
    if (nextId === "init") {
      setAnswers(DEFAULT_DATASET.init.answers);
      setSelectedAnswers((prevtext) => [...prevtext, text]);
    }

    if (nextId === "delivery_time") {
      setAnswers(DEFAULT_DATASET.delivery_time.answers);
      setChats((prevChat) => [...prevChat, { text }]);
      setSelectedAnswers((prevtext) => [...prevtext, text]);
      setTimeout(
        () =>
          setChats((prevChat) => [
            ...prevChat,
            DEFAULT_DATASET.delivery_time.question,
          ]),
        500
      );
    }

    if (nextId === "job_offer") {
      setAnswers(DEFAULT_DATASET.job_offer.answers);
      setChats((prevChat) => [...prevChat, { text }]);
      setSelectedAnswers((prevtext) => [...prevtext, text]);
      setTimeout(
        () =>
          setChats((prevChat) => [
            ...prevChat,
            DEFAULT_DATASET.job_offer.question,
          ]),
        500
      );
    }

    if (nextId === "method") {
      setAnswers(DEFAULT_DATASET.method.answers);
      setChats((prevChat) => [...prevChat]);
      setSelectedAnswers((prevtext) => [...prevtext, text]);
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
