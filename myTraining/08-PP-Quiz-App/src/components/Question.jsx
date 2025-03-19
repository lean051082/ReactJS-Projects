import TimerQuestion from './TimerQuestion';
import Answers from './Answers';
import { useState } from 'react';
import questions from '../questions';
export default function Question({ onSelectAnswer, idQuestion }) {
  const [answer, setAnswer] = useState({
    answerSelect: '',
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      answerSelect: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        answerSelect: answer,
        isCorrect: questions[idQuestion].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';

  if (answer.answerSelect && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.answerSelect) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <TimerQuestion timeout={5000} onTimeout={() => onSelectAnswer(null)} />
      <h2>{questions[idQuestion].text}</h2>
      <Answers
        answerState={answerState}
        selectedAnswer={answer.answerSelect}
        onSelectAnswer={handleSelectAnswer}
        answers={questions[idQuestion].answers}
      />
    </div>
  );
}
