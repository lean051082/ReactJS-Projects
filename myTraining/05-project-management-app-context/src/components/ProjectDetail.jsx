import { useContext } from 'react';
import Button from './Button';
import Tasks from './Tasks';
import { ProjectContext } from '../store/Project-management-context';

export default function ProjectDetail() {
  const { deleteProject, projects, selectedProjectId } =
    useContext(ProjectContext);
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {projects[selectedProjectId].title}
          </h1>
          <Button onClick={() => deleteProject(selectedProjectId)}>
            Delete
          </Button>
        </div>
        <p className="mb-4 text-stone-400">
          {projects[selectedProjectId].date}
        </p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {projects[selectedProjectId].description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}
