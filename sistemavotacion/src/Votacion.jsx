import { useState } from "react";

function Votacion({ question, answers = [] }) {
  const [selectedAnswer, setSelectedAnswer] = useState(
    answers.map((answer, index) => ({ selected: false, text: answer }))
  );

  const [voted, setVoted] = useState(false);
  const [votedSend, setVotedSend] = useState({ selected: false, text: "" });

  const handlerRadio = (index) => {
    const newAnswersList = selectedAnswer.map((answer, i) => ({
      ...answer,
      selected: i === index, // Solo el índice seleccionado será true, los demás false
    }));
    setSelectedAnswer(newAnswersList);
    setVoted((preVoted) => (preVoted = true));
  };

  const handlerVotedSend = () => {
    const voteSend = selectedAnswer.filter((answer, i) => answer.selected);
    setVotedSend((prev) => (prev.text = voteSend.text));
    console.log(voteSend);
  };

  return (
    <>
      <h2>Pregunta</h2>
      <h4>{question}</h4>
      <fieldset>
        <legend>Selecciona una respuesta:</legend>

        <div>
          {selectedAnswer.map((answer, index) => {
            return (
              <div key={index}>
                <input
                  type="radio"
                  id={answer.text + index}
                  name="answer"
                  value={answer.text}
                  checked={answer.selected}
                  onChange={() => handlerRadio(index)}
                />
                <label htmlFor={answer.text + index}>{answer.text}</label>
              </div>
            );
          })}
        </div>
      </fieldset>
      {voted && <button onClick={handlerVotedSend}>Enviar Votación</button>}
      {votedSend.selected && <p>votedSend.text</p>}
    </>
  );
}

export default Votacion;
