import ImgQuizComplete from '../assets/quiz-complete.png';
import questions from '../questions';

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0]
  );
  const wrongAnswers =
    questions.length - skippedAnswers.length - correctAnswers.length;
  return (
    <div id="summary">
      <img src={ImgQuizComplete} />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {Math.round((skippedAnswers.length / questions.length) * 100)}%
          </span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">
            {Math.round((correctAnswers.length / questions.length) * 100)}%
          </span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">
            {Math.round((wrongAnswers / questions.length) * 100)}%
          </span>
          <span className="text">wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((uAnswer, index) => {
          let cssClass = 'user-answer';

          if (uAnswer === null) {
            cssClass += ' skipped';
          } else if (uAnswer === questions[index].answers[0]) {
            cssClass += ' correct';
          } else {
            cssClass += ' wrong';
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{uAnswer ?? 'skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
