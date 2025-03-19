import { useRef, useState } from 'react';
import MainArea from './components/MainArea';
import Sidebar from './components/Sidebar';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const modal = useRef();

  function handleAddProject() {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      e.target.title.value.trim() !== '' &&
      e.target.description.value.trim() !== '' &&
      e.target.due_date.value.trim() !== ''
    ) {
      setProjectsState((prevProjectsState) => {
        return {
          ...prevProjectsState,
          selectedProjectId: undefined,
          projects: [
            ...prevProjectsState.projects,
            {
              title: e.target.title.value,
              description: e.target.description.value,
              date: e.target.due_date.value,
              tasks: [],
            },
          ],
        };
      });
    } else {
      modal.current.openModal();
    }
  }

  function handleSelectProject(index) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: index,
      };
    });
  }

  function handleDeleteProject(index) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        projects: prevProjectsState.projects.filter((_, i) => i !== index),
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddTask(projectIndex, content) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        projects: [
          ...prevProjectsState.projects.map((project, index) => {
            if (projectIndex === index) {
              return {
                ...project,
                tasks: [...project.tasks, content],
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
    });
  }

  function handleClearTask(projectIndex, taskIndex) {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        projects: [
          ...prevProjectsState.projects.map((project, index) => {
            if (projectIndex === index) {
              return {
                ...project,
                tasks: project.tasks.filter((_, i) => i !== taskIndex),
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
    });
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projectsState={projectsState}
        onClickAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
      />
      <MainArea
        projectsState={projectsState}
        onSubmitClick={handleSubmit}
        onDeleteProject={handleDeleteProject}
        onClickAddProject={handleAddProject}
        modal={modal}
        onAddTask={handleAddTask}
        onClearTask={handleClearTask}
      />
    </main>
  );
}

export default App;
