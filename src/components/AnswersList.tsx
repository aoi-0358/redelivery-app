import React from "react";// @ts-ignore
import  AnswerType  from "./dataset"; // @ts-ignore
import  VandIType  from "./dataset"; // @ts-ignore
import Answer from "./components/Answer"


const AnswersList = (props: AnswerType) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((value: VandIType, index: VandIType) => {
        return (
          <Answer
            content={value.content}
            nextId={value.nextId}
            key={index.toString()}
            select={props.select}
          />
        );
      })}
    </div>
  );
};

export default AnswersList;
