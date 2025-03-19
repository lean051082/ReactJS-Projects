import { useContext, useRef } from 'react';
import Button from './Button';
import Input from './Input';
import { ProjectContext } from '../store/Project-management-context';

export default function Tasks() {
  const { projects, selectedProjectId, addTask, clearTask } =
    useContext(ProjectContext);
  const inputTask = useRef();
  const tasks = projects[selectedProjectId].tasks;
  const isTasksEmpty = tasks.length <= 0;

  function addTaskToProject() {
    addTask(selectedProjectId, inputTask.current.value);
    inputTask.current.value = '';
  }

  function clearTaskFromProject(index) {
    clearTask(selectedProjectId, index);
    inputTask.current.value = '';
  }
  return (
    <>
      {' '}
      <section>
        <h2>Tasks</h2>
        <Input ref={inputTask} type="text" />
        <Button onClick={addTaskToProject}>Add Task</Button>
        {isTasksEmpty && <p>This project does not have any task</p>}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{' '}
              <Button onClick={() => clearTaskFromProject(index)}>Clear</Button>{' '}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
