import Button from './Button';
import { useContext } from 'react';
import { ProjectContext } from '../store/Project-management-context';

export default function Sidebar() {
  const { projects, startNewProject, selectProject } =
    useContext(ProjectContext);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      {' '}
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projects
      </h2>
      <div>
        <Button onClick={startNewProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project, index) => (
          <li key={index}>
            <button
              className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
              onClick={() => selectProject(index)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
