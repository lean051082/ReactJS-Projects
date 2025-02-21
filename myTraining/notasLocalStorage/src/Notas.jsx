import { useEffect } from "react";
import { useState } from "react";
import "./Notas.css";

function Notas() {
  const [notes, setNotes] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("myNotes")) || [];
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = (e) => {
    e.preventDefault();
    const myTextarea = e.target.querySelector("textarea");
    setNotes((prevNotes) => [...prevNotes, myTextarea.value]);
    myTextarea.value = "";
  };

  const handleDeleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i != index));
  };
  return (
    <>
      <div>
        <form onSubmit={handleAddNote}>
          <label>Nueva nota:</label>
          <textarea placeholder="Escribe tu nota aquí"></textarea>
          <button>Añadir nueva nota</button>
        </form>
      </div>
      <div>
        <h3>Mis notas</h3>
        <ol>
          {notes.map((note, index) => (
            <li key={index} onClick={() => handleDeleteNote(index)}>
              {note}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default Notas;
