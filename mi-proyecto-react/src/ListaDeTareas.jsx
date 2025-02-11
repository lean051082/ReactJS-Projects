import { use, useState } from "react"; // Importamos la función useState desde la librería react
function ListaDeTareas() {
  const [listaTareas, setListaTareas] = useState([]); // Creamos un estado para almacenar la lista de tareas

  const addTask = (event) => {
    event.preventDefault();
    const input = event.target.querySelector("input");
    setListaTareas([...listaTareas, { text: input.value, completada: false }]);
    input.value = "";
  };

  const deleteTask = (index) => {
    const newTaskList = [...listaTareas];
    newTaskList.splice(index, 1);
    setListaTareas(newTaskList);
  };

  const completeTask = (index) => {
    const newTaskList = [...listaTareas];
    const newTask = newTaskList[index];
    newTask.completada = !newTask.completada;
    setListaTareas(newTaskList);
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <label>Nueva tarea:</label>
        <input type="text" />
        <button type="submit">Agregar</button>
      </form>
      <h2>Lista de tareas</h2>
      <ul>
        {listaTareas.map((tarea, index) => (
          <li
            key={index}
            style={
              tarea.completada
                ? { backgroundColor: "#FF0000" }
                : { backgroundColor: "transparent" }
            }
          >
            {tarea.text} <span>Completada?</span>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => completeTask(index)}
            />
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas; // Exportamos la función ListaDeTareas
