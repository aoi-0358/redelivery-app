import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';
import { AnswersList, Chats } from './components/index';

export default class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
        answers: [],
        chats: [],
        currentID: "init",
        dataset: defaultDataset,
        open: false
    }
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentID];
    const initAnswers = initDataset.answers;

    this.setState( {
      answers: initAnswers
    })
  }

  componentDidMount() {
    this.initAnswer()
     }
   
     render () {
         return (
           <section className="c-sention">
             <div className="c-box">
               <Chats />
               <AnswersList answers={this.state.answers}/>
             </div>
           </section> 
   
           );
       }
    }
   
   
   