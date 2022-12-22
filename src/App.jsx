import React from 'react';
import defaultDataset from './dataset';
import './assets/styles/style.css';

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

  render () {
      return (
        <section className="c-sention">
          <div className="c-box">

          </div>
        </section> 

        );
    }
 }


