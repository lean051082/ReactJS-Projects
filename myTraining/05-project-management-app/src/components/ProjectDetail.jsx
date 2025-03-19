import Button from './Button';
import Tasks from './Tasks';

export default function ProjectDetail({
  projectsState,
  onDeleteProject,
  onAddTask,
  onClearTask,
}) {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {projectsState.projects[projectsState.selectedProjectId].title}
          </h1>
          <Button
            onClick={() => onDeleteProject(projectsState.selectedProjectId)}
          >
            Delete
          </Button>
        </div>
        <p className="mb-4 text-stone-400">
          {projectsState.projects[projectsState.selectedProjectId].date}
        </p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {projectsState.projects[projectsState.selectedProjectId].description}
        </p>
      </header>
      <Tasks
        projectsState={projectsState}
        onAddTask={onAddTask}
        onClearTask={onClearTask}
      />
    </div>
  );
}
