import { useState } from 'react';
import questions from '../questions';

import { useCallback } from 'react';
import Question from './Question';
import Summary from './Summary';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentIdQuestion = userAnswers.length;
  const thereAreQuestions = currentIdQuestion <= questions.length - 1;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, answer];
    });
  }, []);

  if (!thereAreQuestions) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <>
      <div id="quiz">
        <Question
          onSelectAnswer={handleSelectAnswer}
          key={currentIdQuestion}
          idQuestion={currentIdQuestion}
        />
      </div>
    </>
  );
}
