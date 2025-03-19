import { useRef } from 'react';
import Button from './Button';
import Input from './Input';

export default function Tasks({ projectsState, onAddTask, onClearTask }) {
  const inputTask = useRef();
  const tasks = projectsState.projects[projectsState.selectedProjectId].tasks;
  const isTasksEmpty = tasks.length <= 0;

  function addTask() {
    onAddTask(projectsState.selectedProjectId, inputTask.current.value);
    inputTask.current.value = '';
  }

  function clearTask(index) {
    onClearTask(projectsState.selectedProjectId, index);
    inputTask.current.value = '';
  }
  return (
    <>
      {' '}
      <section>
        <h2>Tasks</h2>
        <Input ref={inputTask} type="text" />
        <Button onClick={addTask}>Add Task</Button>
        {isTasksEmpty && <p>This project does not have any task</p>}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task} <Button onClick={() => clearTask(index)}>Clear</Button>{' '}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
