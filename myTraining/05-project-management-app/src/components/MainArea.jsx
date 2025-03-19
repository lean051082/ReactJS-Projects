import AddProjectForm from './AddProjectForm';
import NoProjectSelected from './NoProjectSelected';
import ProjectDetail from './ProjectDetail';
export default function MainArea({
  projectsState,
  onSubmitClick,
  onDeleteProject,
  onClickAddProject,
  modal,
  onAddTask,
  onClearTask,
}) {
  return (
    <>
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onClickAddProject={onClickAddProject} />
      )}
      {projectsState.selectedProjectId === null && (
        <AddProjectForm onSubmitClick={onSubmitClick} modal={modal} />
      )}
      {projectsState.selectedProjectId !== null &&
        projectsState.selectedProjectId !== undefined && (
          <ProjectDetail
            projectsState={projectsState}
            onDeleteProject={onDeleteProject}
            onAddTask={onAddTask}
            onClearTask={onClearTask}
          />
        )}
    </>
  );
}
