import React from "react";
import { AnswerListType, AnswerProps, AnswerType } from "../dataset";
import { Answer } from "/Users/okamuraao/Desktop/redelivery-app/src/components/index";

const AnswersList = (props: {
  answers: AnswerListType;
  select: (content: string, nextId: string) => void;
}) => {
  const { answers, select } = props;
  return (
    <div className="c-grid__answer">
      {answers.map((value: AnswerType, index: number) => {
        return (
          <Answer
            content={value.content}
            nextId={value.nextId}
            key={index.toString()}
            select={select}
          />
        );
      })}
    </div>
  );
};

export default AnswersList;
