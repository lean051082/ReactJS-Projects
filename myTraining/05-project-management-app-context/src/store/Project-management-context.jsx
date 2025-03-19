import { createContext, useReducer } from 'react';
import { useRef, useState } from 'react';

export const ProjectContext = createContext({
  selectedProjectId: undefined,
  projects: [],
  startNewProject: () => {},
  addNewProject: () => {},
  selectProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
  clearTask: () => {},
  modal: null,
});

function projectReducer(state, action) {
  if (action.type === 'START_NEW_PROJECT') {
    return {
      ...state,
      selectedProjectId: null,
    };
  }

  if (action.type === 'ADD_NEW_PROJECT') {
    action.payload.preventDefault();
    if (
      action.payload.target.title.value.trim() !== '' &&
      action.payload.target.description.value.trim() !== '' &&
      action.payload.target.due_date.value.trim() !== ''
    ) {
      return {
        ...state,
        selectedProjectId: undefined,
        projects: [
          ...state.projects,
          {
            title: action.payload.target.title.value,
            description: action.payload.target.description.value,
            date: action.payload.target.due_date.value,
            tasks: [],
          },
        ],
      };
    } else {
      modal.current.openModal();
    }
  }

  if (action.type === 'SELECT_PROJECT') {
    return {
      ...state,
      selectedProjectId: action.payload.index,
    };
  }

  if (action.type === 'DELETE_PROJECT') {
    return {
      ...state,
      projects: state.projects.filter((_, i) => i !== action.payload.index),
      selectedProjectId: undefined,
    };
  }

  if (action.type === 'ADD_TASK') {
    return {
      ...state,
      projects: [
        ...state.projects.map((project, index) => {
          if (action.payload.projectIndex === index) {
            return {
              ...project,
              tasks: [...project.tasks, action.payload.content],
            };
          } else {
            return {
              ...project,
              tasks: [...project.tasks],
            };
          }
        }),
      ],
    };
  }

  if (action.type === 'CLEAR_TASK') {
    return {
      ...state,
      projects: [
        ...state.projects.map((project, index) => {
          if (action.payload.projectIndex === index) {
            return {
              ...project,
              tasks: project.tasks.filter(
                (_, i) => i !== action.payload.taskIndex
              ),
            };
          } else {
            return {
              ...project,
              tasks: [...project.tasks],
            };
          }
        }),
      ],
    };
  }
  return state;
}

export default function ProjectManagementProvider({ children }) {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const [prjState, dispatch] = useReducer(projectReducer, {
    selectedProjectId: undefined,
    projects: [],
  });

  const modal = useRef();

  function handleAddProject() {
    dispatch({
      type: 'START_NEW_PROJECT',
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      e.target.title.value.trim() !== '' &&
      e.target.description.value.trim() !== '' &&
      e.target.due_date.value.trim() !== ''
    ) {
      dispatch({
        type: 'ADD_NEW_PROJECT',
        payload: e,
      });
    } else {
      modal.current.openModal();
    }
  }

  function handleSelectProject(index) {
    dispatch({
      type: 'SELECT_PROJECT',
      payload: { index },
    });
  }

  function handleDeleteProject(index) {
    dispatch({
      type: 'DELETE_PROJECT',
      payload: { index },
    });
  }

  function handleAddTask(projectIndex, content) {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        projectIndex,
        content,
      },
    });
  }

  function handleClearTask(projectIndex, taskIndex) {
    dispatch({
      type: 'CLEAR_TASK',
      payload: {
        projectIndex,
        taskIndex,
      },
    });
  }

  const ctxValue = {
    selectedProjectId: prjState.selectedProjectId,
    projects: prjState.projects,
    startNewProject: handleAddProject,
    addNewProject: handleSubmit,
    selectProject: handleSelectProject,
    deleteProject: handleDeleteProject,
    addTask: handleAddTask,
    clearTask: handleClearTask,
    modal: modal,
  };
  return (
    <ProjectContext.Provider value={ctxValue}>
      {children}
    </ProjectContext.Provider>
  );
}
