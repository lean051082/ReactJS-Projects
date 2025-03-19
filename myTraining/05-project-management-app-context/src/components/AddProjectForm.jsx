import { useContext } from 'react';
import Input from './Input';
import Modal from './Modal';
import { ProjectContext } from '../store/Project-management-context';

export default function AddProjectForm() {
  const { addNewProject, modal } = useContext(ProjectContext);
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">
          Please, provide a valid value for every input field.
        </p>
      </Modal>
      <form className="w-[35rem] mt-8" onSubmit={addNewProject}>
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              name="save"
              className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <Input type="text" label="title" name="title" />
        <Input label="description" name="description" textarea />
        <Input type="date" label="due date" name="due_date" />
      </form>
    </>
  );
}
