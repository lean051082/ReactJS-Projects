import { useRef } from 'react';
import questions from '../questions';

export default function Answers({
  answers,
  answerState,
  selectedAnswer,
  onSelectAnswer,
}) {
  const shuffleAnswers = useRef();
  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...answers];
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffleAnswers.current.map((answer, index) => {
        const isSelectedAnswer = selectedAnswer === answer;
        let cssClass;
        if (isSelectedAnswer && answerState === 'answered') {
          cssClass = 'selected';
        }

        if (
          isSelectedAnswer &&
          (answerState === 'correct' || answerState === 'wrong')
        ) {
          cssClass = answerState;
        }

        return (
          <li key={index} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssClass}
              disabled={selectedAnswer !== answer && answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
