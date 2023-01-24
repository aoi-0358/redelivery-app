import React from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";
import FormDialog from "./components/Forms/FormDialog";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      // 選択した解答を配列に追加
      selectedAnswers: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };
    this.selectAnswer = this.selectAnswer.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // 次の質問をチャットエリアに表示する関数
  displayNextQuestion = (nextQuestionId) => {
    const chats = this.state.chats;

    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: "question",
    });

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats: chats,
      currentId: nextQuestionId,
    });
  };
  // 回答が選択された時に呼ばれる関数
  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === "init":
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 500);
        break;

      case nextQuestionId === "contact":
        this.handleClickOpen();
        break;

      default:
        const chats = this.state.chats;
        // answersに一旦これまでの回答を格納
        const answers = this.state.selectedAnswers;
        this.setState({
          // answersに今回選択された解答を追加
          selectedAnswers: [...answers, selectedAnswer],
        });
        chats.push({
          text: selectedAnswer,
          type: "answer",
        });
        this.setState({
          chats: chats,
        });
        setTimeout(() => this.displayNextQuestion(nextQuestionId), 1000);
        break;
    }
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.currentId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }

  render() {
    return (
      <section className="c-sention">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList
            answers={this.state.answers}
            select={this.selectAnswer}
          />
          <FormDialog
            open={this.state.open}
            handleClose={this.handleClose}
            selectedAnswers={this.state.selectedAnswers}
          />
        </div>
      </section>
    );
  }
}

//  const now = new Date();
//  const hh = now.getHours();

// document.getElementById('hh').style.display = "none";
// if (now >= '12:00') {
//    console.log('a')
//  } else {
//   console.log('b');
// }