import { useContext } from 'react';
import AddProjectForm from './AddProjectForm';
import NoProjectSelected from './NoProjectSelected';
import ProjectDetail from './ProjectDetail';
import { ProjectContext } from '../store/Project-management-context';
export default function MainArea() {
  const projectCtx = useContext(ProjectContext);

  const NO_PROJECT_SELECTED = projectCtx.selectedProjectId === undefined;
  const CREATE_NEW_PROJECT = projectCtx.selectedProjectId === null;
  const PROJECT_SELECTED =
    projectCtx.selectedProjectId !== null &&
    projectCtx.selectedProjectId !== undefined;
  return (
    <>
      {NO_PROJECT_SELECTED && <NoProjectSelected />}
      {CREATE_NEW_PROJECT && <AddProjectForm />}
      {PROJECT_SELECTED && <ProjectDetail />}
    </>
  );
}
