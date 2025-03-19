import { useContext } from 'react';
import imgNoProjects from '../assets/no-projects.png';
import Button from './Button';
import { ProjectContext } from '../store/Project-management-context';
export default function NoProjectSelected() {
  const { startNewProject } = useContext(ProjectContext);
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={imgNoProjects} />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={startNewProject}>Create a new project</Button>
      </p>
    </div>
  );
}
